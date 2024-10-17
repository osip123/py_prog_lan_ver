class PlusNode {

    constructor(arg1: Int, arg2: Int) {
        this.arg1 = arg1
        this.arg2 = arg2
    }

    public val arg1: Int
    public val arg2: Int


    public fun evaluate(): Int {
        return arg1 + arg2
    }

}