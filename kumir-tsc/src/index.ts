// import Lexer from "./core/Lexer/Lexer";
// import Token from "./core/Token";
//
//
// const lexer = new Lexer(['9', 'нц', '8'])
//
// let Tokens:Token[] = lexer.create_token_list();
//
// console.log(Tokens)

import CompilerCore from "./compiller/compiller.core";

import Token from "./core/Token";
import {TokenTypes} from "./core/TokenTypes";

let Token1 = new Token(TokenTypes.WHILE, 'while', 'while');
let Token2 = new Token(TokenTypes.INT, '6', 'val')

let TokenList:Token[] = [];

TokenList.push(Token1)
TokenList.push(Token2)

const compiller = new CompilerCore(TokenList)

compiller.__run_compille();
