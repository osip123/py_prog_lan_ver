

class MParser {

    public fun parse(input: String): List<MToken> {
        val tokenList = mutableListOf<MToken>()
        val parseCode = input.split(" ")

        for (i in parseCode){
            val lexer = Lexer()
            tokenList.add(lexer.createToken(i))
        }

        return tokenList
    }


}