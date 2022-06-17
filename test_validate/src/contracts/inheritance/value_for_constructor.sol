contract Helper {
    bytes3 name;
    bool flag;

    constructor(bytes3 x, bool f) payable {
        name = x;
        flag = f;
    }

    function getName() public returns (bytes3 ret) {
        return name;
    }

    function getFlag() public returns (bool ret) {
        return flag;
    }
}


contract Main {
    Helper h;

    constructor() payable {
        h = (new Helper){value: 10}("abc", true);
    }

    function getFlag() public returns (bool ret) {
        return h.getFlag();
    }

    function getName() public returns (bytes3 ret) {
        return h.getName();
    }

    function getBalances() public returns (uint256 me, uint256 them) {
        me = address(this).balance;
        them = address(h).balance;
    }
}

// ----
// constructor(), 22 wei ->
// gas irOptimized: 268544
// gas legacy: 402045
// gas legacyOptimized: 266772
// getFlag() -> true
// getName() -> "abc"
// getBalances() -> 12, 10
