// further substitute to remove trivial variables
function yinyang_cps_00_05() {
    const k = (yin) => {
        process.stdout.write("@");
        const k2 = (yang) => {
            process.stdout.write("*");
            yin(yang);
        };
        k2(k2); // note that this is the U-combinator pattern, which explains the infinite recursion
    };
    k(k); // note that this is the U-combinator pattern, which explains the infinite recursion
}

yinyang_cps_00_05(); // output: @*@**@***@****@*****@...