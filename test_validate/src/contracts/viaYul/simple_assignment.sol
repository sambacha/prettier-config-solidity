contract C {
    function f(uint a, uint b) public pure returns (uint x, uint y) {
        x = a;
        y = b;
    }
}
// ====
// compileToEwasm: also
// ----
// f(uint256,uint256): 5, 6 -> 5, 6
