contract C {
    function f() public pure returns (uint) {
        uint x;
        return x;
    }
}
// ====
// compileToEwasm: also
// ----
// f() -> 0
