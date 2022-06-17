contract C {
    function f() public returns (uint256 r, bytes32 r2) {
        assembly {
            r := 7
            r2 := "abcdef"
        }
    }
}

// ====
// compileToEwasm: also
// ----
// f() -> 7, "abcdef"
