// continue...
function yinyang_cps_05() {
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
    // yang(yang2);
    // ^^^ expanded according to the definition of `yang` ^^^
    // all `yang2` in `yang` are replaced by `yang2`... well, I smartly named the variables
    process.stdout.write("*"); // output 5
    yin(yang2); // next: expand this
}

yinyang_cps_05(); // output: @*@**@***@****@*****@...