function call_cc_cps(f, k) {
    // k is the continuation of `call_cc_cps`
    const v = f(k);
    k(v);
}

// remove the trivial immediately invoked functions
function yinyang_cps_00_03() {
    // call_cc_cps(k => k, (cc) => {
    call_cc_cps(k => k, (yin) => {
        // const yin = ((cc) => {
        //     process.stdout.write("@");
        //     return cc;
        // })(cc);
        process.stdout.write("@");
        // call_cc_cps(k2 => k2, (cc2) => {
        call_cc_cps(k2 => k2, (yang) => {
            // const yang = ((cc) => {
            //     process.stdout.write("*");
            //     return cc2;
            // })(cc2);
            process.stdout.write("*");
            yin(yang);
        })
    })
}

yinyang_cps_00_03(); // output: @*@**@***@****@*****@...