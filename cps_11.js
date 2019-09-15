// continue...
function yinyang_cps_11() {
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
    const yang4 = ((yang5) => { // renamed: yang -> yang5
        process.stdout.write("*");
        yang3(yang5); // renamed: yang -> yang5
    });
    process.stdout.write("*"); // output 11
    yang3(yang4); // next: expand this
}

yinyang_cps_11(); // output: @*@**@***@****@*****@...