// continue...
function yinyang_cps_02() {
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
    // rename the variable to prevent confusing shadowing
    const yang = ((yang2) => { // renamed: yang -> yang2
        process.stdout.write("*");
        yin(yang2); // renamed: yang -> yang2
    })
    process.stdout.write("*"); // output 2
    yin(yang); // next step: expand this
}

yinyang_cps_02(); // output: @*@**@***@****@*****@...