// continue...
function yinyang_cps_16() {
    const yin = ((yin2) => {
        process.stdout.write("@");
        ((yang) => {
            process.stdout.write("*");
            yin2(yang);
        })((yang) => {
            process.stdout.write("*");
            yin2(yang);
        });
    });
    process.stdout.write("@"); // output 1
    const yang = ((yang2) => {
        process.stdout.write("*");
        yin(yang2);
    })
    process.stdout.write("*"); // output 2
    process.stdout.write("@"); // output 3
    const yang2 = ((yang3) => {
        process.stdout.write("*");
        yang(yang3);
    });;
    process.stdout.write("*"); // output 4
    process.stdout.write("*"); // output 5
    process.stdout.write("@"); // output 6
    const yang3 = ((yang4) => {
        process.stdout.write("*");
        yang2(yang4);
    });
    process.stdout.write("*"); // output 7
    process.stdout.write("*"); // output 8
    process.stdout.write("*"); // output 9
    process.stdout.write("@"); // output 10
    const yang4 = ((yang5) => {
        process.stdout.write("*");
        yang3(yang5);
    });
    process.stdout.write("*"); // output 11
    process.stdout.write("*"); // output 12
    process.stdout.write("*"); // output 13
    process.stdout.write("*"); // output 14
    process.stdout.write("@"); // output 15
    const yang5 = ((yang6) => { // rename: yang -> yang6
        process.stdout.write("*");
        yang4(yang6); // rename: yang -> yang6
    })
    process.stdout.write("*"); // output 16
    yang4(yang5); // next: expand this
}

yinyang_cps_16(); // output: @*@**@***@****@*****@...

// Pattern:
// 1. At first, we have `yin` and `yang`.
// 2. We invoke `yin` with `yang`.
// 3. Every time we invoke `yin` with `yang_{n}`, we create a `yang_{n+1}` and invoke `yang_{n}` with `yang_{n+1}` as parameter.
// 4. Each `yang_{i}` will invoke `yang_{i-1}` with the given parameter.
// 5. Yang will invoke `yin` with the given parameter, going back to step 3.
// 6. Each time `yin` is invoked, a "@" is printed; each time `yang_{i}` is invoked, a "*" is printed, making the @*@**@***@****@... pattern.