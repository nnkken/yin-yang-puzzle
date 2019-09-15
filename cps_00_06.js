// now substitute to remove `k` and `k2`
function yinyang_cps_00_06() {
    ((yin) => {
        process.stdout.write("@");
        ((yang) => {
            process.stdout.write("*");
            yin(yang);
        })((yang) => {
            process.stdout.write("*");
            yin(yang);
        });
    })((yin) => {
        process.stdout.write("@");
        ((yang) => {
            process.stdout.write("*");
            yin(yang);
        })((yang) => {
            process.stdout.write("*");
            yin(yang);
        });
    }); // next step: plug this giant "parameter" from line 12 to line 21 into the function at line 3
}

yinyang_cps_00_06(); // output: @*@**@***@****@*****@...