contract C {
    uint public i = 1;
    uint public k = 2;

    constructor() {
        i = i + i;
        k = k - i;
    }
}
// ====
// compileToEwasm: also
// ----
// i() -> 2
// k() -> 0
