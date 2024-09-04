"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Lexer_1 = require("./core/Lexer/Lexer");
var lexer = new Lexer_1.default(['9', 'нц', '8']);
var Tokens = lexer.create_token_list();
console.log(Tokens);
