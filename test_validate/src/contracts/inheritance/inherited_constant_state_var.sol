contract A {
    uint256 constant x = 7;
}


contract B is A {
    function f() public returns (uint256) {
        return A.x;
    }
}

// ====
// compileToEwasm: also
// ----
// f() -> 7
