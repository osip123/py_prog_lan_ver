class MToken {

    var type: TokenTypes
    var buffer: String

    constructor(type: TokenTypes, buffer: String) {
        this.type = type
        this.buffer = buffer
    }

    public fun ToString(): String {
        return "Token: $type $buffer"
    }

}