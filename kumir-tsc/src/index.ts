import Lexer from "./core/Lexer/Lexer";
import Token from "./core/Token";


const lexer = new Lexer(['9', 'нц', '8'])

let Tokens:Token[] = lexer.create_token_list();

console.log(Tokens)
