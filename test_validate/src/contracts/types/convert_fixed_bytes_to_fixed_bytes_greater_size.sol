contract Test {
    function bytesToBytes(bytes2 input) public returns (bytes4 ret) {
        return bytes4(input);
    }
}
// ====
// compileToEwasm: also
// ----
// bytesToBytes(bytes2): "ab" -> "ab"
