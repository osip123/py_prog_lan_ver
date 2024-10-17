class Lexer() {


    public fun createToken(tok: String): MToken {
        if (tok == "+") {
            val token = MToken(TokenTypes.PLUS, "+")
            return token
        }

        if (tok == "-") {
            val token = MToken(TokenTypes.MINUS, "-")
            return token
        }

        if (tok == "=") {
            val token = MToken(TokenTypes.EOF, "=")
            return token
        }

        if (isNumber(tok)) {
            val token = MToken(TokenTypes.NUMBER, tok)
            return token
        }

        return MToken(TokenTypes.UNKNOWN, tok)
    }

    private fun isNumber(lexema: String): Boolean {
        if(lexema.toInt() in 0..9) return true
        return false
    }

    public fun tokenToString(token: MToken): String {
        if (token.type == TokenTypes.PLUS) { return "PLUS" }
        if (token.type == TokenTypes.MINUS) { return "MINUS" }
        if (token.type == TokenTypes.EOF) { return "EOF" }
        if (token.type == TokenTypes.NUMBER) { return "NUMBER" }
        if (token.type == TokenTypes.UNKNOWN) { return "UNKNOWN" }
        return "UNKNOWN"
    }

    public fun getTokenBuffer(token: MToken): String {
        return token.buffer
    }
}