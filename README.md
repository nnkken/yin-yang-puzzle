# Yin Yang puzzle

```scheme
(let ((yin
    ((lambda (cc) (display #\@) cc) (call-with-current-continuation (lambda (c) c))))
  (yang
    ((lambda (cc) (display #\*) cc) (call-with-current-continuation (lambda (c) c)))))
(yin yang))
```

See https://en.wikipedia.org/wiki/Call-with-current-continuation for more details.

## Syntactic translation to JS (with unusable `call_cc` function)

```javascript
function yinyang() {
    const yin = ((cc) => {
        process.stdout.write("@");
        return cc;
    })(call_cc(k => k));
    const yang = ((cc) => {
        process.stdout.write("*");
        return cc;
    })(call_cc(k => k));
    yin(yang);
}
```

## semantic of call_cc

`call_cc` captures the "current" continuation of the `call_cc` call itself. Example:

```javascript
function call_cc_demo() {
    const x = call_cc(k => {
        k(100);
        return 200;
    });
    console.log(x);
}
```

`call_cc` takes a user-provided function `f`, which takes the continuation `k` as parameter. So a psuedo implementation of `call_cc` is like this:

```javascript
function call_cc(f) {
    let k = get_cont(); // this is the continuation, i.e. how the caller of `call_cc` will do with the return value of `call_cc`
    return f(k);
}
```

In the above `call_cc_demo` example, the `k` is the continuation of `call_cc`, which is equal to:

```javascript
(x) => {
    console.log(x);
}
```

`call_cc` will execute the function `f` provided, so

```javascript
(k) => {
    f(100);
    return 200;
}
```

will be executed, and the console will output `100`.

Then the return value of `f` will be the return value of `call_cc`, so `x` is equal to `200`, and then it will execute `console.log(x)`, which outputs `200`.

So the output of the function will be:

```
100
200
```

## Inferring the type of `call_cc`

Assume that call_cc is a function returning type `r`:

```
call_cc: (???) -> r
```

It takes a function `f`, and the return value of `f` is the return value of `call_cc`, so they have the same return type `r`:

```
f: (???) -> r
call_cc: (??? -> r) -> r
```

`f` takes `k`, which is the continuation of `call_cc`, i.e. it takes an `r` and returns something unrelated:

```
k: r -> a
f: (r -> a) -> r
call_cc: ((r -> a) -> r) -> r
```

Note that `call_cc` is ill typed, since (like in the yin-yang puzzle) we can return `k` in `f`, making `r` be `(r -> a)`, which is recursively typed.

## Continuation-Passing Style (CPS)

Every program can be rewritten in CPS, i.e. callback style:

```javascript
function f(x) {
    return x + 123;
}

function g() {
    const y = f(10);
    console.log(y);
}

g(); // output: 133

// ^^^ Normal version ^^^
//
// ------------------------------------------------------------
//
// vvv CPS version vvv

function console_log_cps(v, k) {
    console.log(v);
    k();
}

function f_cps(x, k) {
    k(x + 123);
}

function g_cps(k) {
    f_cps(10, (y) => {
        console_log_cps(y, k);
    })
}

g_cps(_ => _); // output: 133
```

With CPS-style, we can write `call_cc` trivially.

# Code organization

`cps_${output_index}(_{iteration})?.js` means that `This file contains the function which explains the first ${output_index} outputs, then (if any) further ${iteration} expanded in order to find the next output`.

For example, in `cps_01.js`, there will be 1 `process.stdout.write` already expanded the top level.