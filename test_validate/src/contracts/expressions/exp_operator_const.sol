contract test {
    function f() public returns(uint d) { return 2 ** 3; }
}
// ====
// compileToEwasm: also
// ----
// f() -> 8
