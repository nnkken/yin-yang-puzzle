// function call_cc_cps(f, k) {
//     // k is the continuation of `call_cc_cps`
//     const v = f(k);
//     k(v);
// }

// now expand and remove the `call_cc_cps`
function yinyang_cps_00_04() {
    const f = (k => k);
    const k = (yin) => {
        process.stdout.write("@");
        const f2 = (k2 => k2);
        const k2 = (yang) => {
            process.stdout.write("*");
            yin(yang);
        };
        const v2 = f2(k2);
        k2(v2);
    };
    const v = f(k);
    k(v);
}

yinyang_cps_00_04(); // output: @*@**@***@****@*****@...