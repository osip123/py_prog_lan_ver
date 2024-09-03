"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Analayzer_1 = require("./core/Analayzer");
var Lexer_1 = require("./core/Lexer");
var Parser_1 = require("./core/Parser");
function main() {
    try {
        var lexer = new Lexer_1.default('***+**');
        var Token_Arry = lexer.create_token_list();
        var parser = new Parser_1.default(Token_Arry);
        var Tokens = parser.run_code();
        var anylazer = new Analayzer_1.default(Tokens);
        anylazer.__run_code__();
        return true;
    }
    catch (error) {
        console.error(error);
        return false;
    }
}
if (!main()) {
    console.log('сборка завершена код выхода - 1< со сбоем -10090');
}
else {
    console.log('сборка завершена код выхода - 0< со сбоем 0');
}
