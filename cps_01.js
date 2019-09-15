// start to trace the calls, which finally generates the first output
function yinyang_cps_01() {
    // rename the variable to prevent confusing shadowing
    const yin = ((yin2) => { // renamed: yin -> yin2
        process.stdout.write("@");
        ((yang) => {
            process.stdout.write("*");
            yin2(yang); // renamed: yin -> yin2
        })((yang) => {
            process.stdout.write("*");
            yin2(yang); // renamed: yin -> yin2
        });
    });
    process.stdout.write("@"); // output 1
    ((yang) => {
        process.stdout.write("*");
        yin(yang);
    })((yang) => {
        process.stdout.write("*");
        yin(yang);
    }); // next step: plug this not-so-giant "parameter" from line 18 to line 21 into the function at line 15
}

yinyang_cps_01(); // output: @*@**@***@****@*****@...