contract test {
    function f() public returns(uint d) { return 0 ** 0; }
}
// ====
// compileToEwasm: also
// ----
// f() -> 1
