"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Lexer_1 = require("./core/Lexer/Lexer");
var Token_1 = require("./core/Token");
var lexema = ['нц', 'пока', 'кц'];
var lexer = new Lexer_1.default(lexema);
var Tokens = lexer.create_token_list();
for (var i = 0; i < Token_1.default.length; i++) {
    console.log(Tokens[i].Name);
}
