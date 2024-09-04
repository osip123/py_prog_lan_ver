"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Token_1 = require("../Token");
var TokenTypes_1 = require("../TokenTypes");
var Lexer = /** @class */ (function () {
    function Lexer(lexema) {
        this.Tokens_List = [];
        this.lexeme = lexema;
    }
    Lexer.prototype.create_token_list = function () {
        for (var i = 0; i < this.lexeme.length; i++) {
            if (this.lexeme[i] == 'нц') {
                var new_token = new Token_1.default(TokenTypes_1.TokenTypes.START, '*', 'start');
                this.Tokens_List.push(new_token);
                // new_token.clear();
            }
            if (this.lexeme[i] == 'пока') {
                var new_token = new Token_1.default(TokenTypes_1.TokenTypes.WHILE, '*', 'while');
                this.Tokens_List.push(new_token);
                // new_token.clear();
            }
            if (this.lexeme[i] == 'кц') {
                var new_token = new Token_1.default(TokenTypes_1.TokenTypes.END, '*', 'end');
                this.Tokens_List.push(new_token);
                // new_token.clear();
            }
            if (this.lexeme[i] == '=') {
                var new_token = new Token_1.default(TokenTypes_1.TokenTypes.EQ, '*', '=');
                this.Tokens_List.push(new_token);
                // new_token.clear();
            }
            if (this.lexeme[i] == '-') {
                var new_token = new Token_1.default(TokenTypes_1.TokenTypes.MINUS, '*', '-');
                this.Tokens_List.push(new_token);
            }
            if (this.lexeme[i] == '+') {
                var new_token = new Token_1.default(TokenTypes_1.TokenTypes.PLUS, '*', '+');
                this.Tokens_List.push(new_token);
            }
            if (this.lexeme[i] < '9' && this.lexeme[i] > '0') {
                var new_token = new Token_1.default(TokenTypes_1.TokenTypes.INT, this.lexeme[i], 'var');
                this.Tokens_List.push(new_token);
            }
        }
        return this.Tokens_List;
    };
    return Lexer;
}());
exports.default = Lexer;
