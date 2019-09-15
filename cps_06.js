// continue...
function yinyang_cps_06() {
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
    // yin(yang2);
    // ^^^ expanded according to the definition of `yin` ^^^
    // all `yin2` in `yin` are replaced by `yang2`
    process.stdout.write("@"); // output 6
    ((yang) => {
        process.stdout.write("*");
        yang2(yang);
    })((yang) => {
        process.stdout.write("*");
        yang2(yang);
    }); // next: expand this
}

yinyang_cps_06(); // output: @*@**@***@****@*****@...