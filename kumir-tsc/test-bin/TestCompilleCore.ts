import CompillerCore from "../src/compiller/compiller.core";

import Token from "../src/core/Token";
import {TokenTypes} from "../src/core/TokenTypes";

const Token = new Token('1', '2', TokenTypes.INT);
const Token2 = new Token('1', '2', TokenTypes.START);

const TokenList:Token[] = [];

TokenList.push(Token);
TokenList.push(Token2);

const compiller = new CompillerCore(TokenList);

compiller.__run_compille();