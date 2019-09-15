// continue...
function yinyang_cps_10() {
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
    // yin(yang3);
    // ^^^ expanded according to the definition of `yin` ^^^
    // all `yin2` in `yin` are replaced by `yang3`
    process.stdout.write("@"); // output 10
    ((yang) => {
        process.stdout.write("*");
        yang3(yang);
    })((yang) => {
        process.stdout.write("*");
        yang3(yang);
    }); // next: expand this
}

yinyang_cps_10(); // output: @*@**@***@****@*****@...