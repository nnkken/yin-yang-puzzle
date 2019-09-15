function yinyang() {
    const yin = ((cc) => {
        process.stdout.write("@");
        return cc;
    })(call_cc(k => k));
    const yang = ((cc2) => {
        process.stdout.write("*");
        return cc2;
    })(call_cc(k2 => k2));
    yin(yang);
}

yinyang(); // cannot run, since we do not have `call_cc`