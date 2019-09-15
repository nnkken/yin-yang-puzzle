// continue...
function yinyang_cps_04() {
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
    const yang2 = ((yang3) => { // renamed: yang2 -> yang3
        process.stdout.write("*");
        yang(yang3); // renamed: yang2 -> yang3
    });;
    process.stdout.write("*"); // output 4
    yang(yang2); // next: expand this
}

yinyang_cps_04(); // output: @*@**@***@****@*****@...