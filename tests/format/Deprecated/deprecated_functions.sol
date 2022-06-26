contract test {
	function f() pure public {
		bytes32 x = sha3("");
		x;
	}
	function g() public {
		suicide(payable(0x0000000000000000000000000000000000000001));
	}
}