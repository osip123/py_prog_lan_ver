"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Lexer_1 = require("./core/Lexer");
var lexer = new Lexer_1.default('+++');
var TokenArry = lexer.create_token_list();
console.log(TokenArry);
