
import CompilerCore from "./compiller/compiller.core";

import Token from "./core/Token";
import {TokenTypes} from "./core/TokenTypes";

let Token1 = new Token(TokenTypes.WHILE, 'while', 'while');
let Token2 = new Token(TokenTypes.INT, '6', 'val')

let TokenList:Token[] = [];

TokenList.push(Token1)
TokenList.push(Token2)

const compiller = new CompilerCore(TokenList)

let output = compiller.__run_code();
console.log(output)
