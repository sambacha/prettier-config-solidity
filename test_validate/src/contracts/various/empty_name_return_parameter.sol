contract test {
    function f(uint256 k) public returns (uint256) {
        return k;
    }
}

// ====
// compileToEwasm: also
// ----
// f(uint256): 9 -> 9
