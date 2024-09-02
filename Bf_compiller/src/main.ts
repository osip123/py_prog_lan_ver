import Lexer from './core/Lexer';
import { Token } from './core/Token';
import { TokenType } from './core/TokenType';


let lexer = new Lexer('+++')

const TokenArry = lexer.create_token_list()

console.log(TokenArry)