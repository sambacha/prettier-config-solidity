contract C {
    constructor() {
        uint256 x;
        assembly { x := 0 }
        f();
    }
    function f() internal pure {
        /// @solidity memory-safe-assembly
        assembly { mstore(0, 0) }
    }
    function g() public pure {
        assembly { mstore(0, 0) }
    }
}
// ----
// :C(creation) true
// :C(runtime) false
