import Lexer from "../src/core/Lexer/Lexer";
import Token from "../src/core/Token";

const lexema:string[] = ['нц', 'пока', 'кц']

let lexer = new Lexer(lexema)

const Tokens:Token[] = lexer.create_token_list();

for (let i = 0; i < Token.length; i++) {
    console.log(Tokens[i].Name)
}