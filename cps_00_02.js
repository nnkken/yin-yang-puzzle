function call_cc_cps(f, k) {
    // k is the continuation of `call_cc_cps`
    const v = f(k);
    k(v);
}

// further replace the second `call_cc` with `call_cc_cps` in `yang
function yinyang_cps_00_02() {
    call_cc_cps(k => k, (cc) => {
        const yin = ((cc) => {
            process.stdout.write("@");
            return cc;
        })(cc);
        call_cc_cps(k2 => k2, (cc2) => {
            const yang = ((cc2) => {
                process.stdout.write("*");
                return cc2;
            })(cc2);
            yin(yang);
        })
    })
}

yinyang_cps_00_02(); // output: @*@**@***@****@*****@...