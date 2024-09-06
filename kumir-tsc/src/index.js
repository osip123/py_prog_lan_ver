"use strict";
// import Lexer from "./core/Lexer/Lexer";
// import Token from "./core/Token";
//
//
// const lexer = new Lexer(['9', 'нц', '8'])
//
// let Tokens:Token[] = lexer.create_token_list();
//
// console.log(Tokens)
Object.defineProperty(exports, "__esModule", { value: true });
var compiller_core_1 = require("./compiller/compiller.core");
var Token_1 = require("./core/Token");
var TokenTypes_1 = require("./core/TokenTypes");
var Token1 = new Token_1.default(TokenTypes_1.TokenTypes.WHILE, 'while', 'while');
var Token2 = new Token_1.default(TokenTypes_1.TokenTypes.INT, '6', 'val');
var TokenList = [];
TokenList.push(Token1);
TokenList.push(Token2);
var compiller = new compiller_core_1.default(TokenList);
compiller.__run_compille();
