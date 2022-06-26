contract C {
    function f() public {
        assembly {
            datasize(0)
            dataoffset(0)
            datacopy(0, 1, 2)
            setimmutable(0, "x", 1)
            loadimmutable("x")
            linkersymbol("x")
            memoryguard(0)
            verbatim_1i_1o(hex"600202", 0)

            pop(msize())
            pop(pc())
        }
    }
}