contract test {
	function f() pure public {
		bytes32 x = sha3("");
		x;
	}
	function g() public {
		suicide(payable(0x0000000000000000000000000000000000000001));
	}
}
// ----
// TypeError 3557: (58-62): "sha3" has been deprecated in favour of "keccak256".
// TypeError 8050: (101-108): "suicide" has been deprecated in favour of "selfdestruct".
