function call_cc_cps(f, k) {
    // k is the continuation of `call_cc_cps`
    const v = f(k);
    k(v);
}

// replace the first `call_cc` with `call_cc_cps`
function yinyang_cps_00_01() {
    call_cc_cps(k => k, (cc) => {
        const yin = ((cc) => {
            process.stdout.write("@");
            return cc;
        })(cc);
        const yang = ((cc2) => {
            process.stdout.write("*");
            return cc2;
        })(call_cc(k2 => k2));
        yin(yang);
    })
}

yinyang_cps_00_01(); // still cannot run, since we are still using `call_cc` in `yang`