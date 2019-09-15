// continue...
function yinyang_cps_03() {
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
    // yin(yang);
    // ^^^ expanded according to the definition of `yin` ^^^
    // all `yin2` in `yin` are replaced by `yang`
    process.stdout.write("@"); // output 3
    ((yang2) => { // renamed: yang -> yang2 
        process.stdout.write("*");
        yang(yang2); // renamed: yang -> yang2 
    })((yang2) => { // renamed: yang -> yang2 
        process.stdout.write("*");
        yang(yang2); // renamed: yang -> yang2 
    }); // next: expand this
}

yinyang_cps_03(); // output: @*@**@***@****@*****@...