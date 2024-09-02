"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Token_1 = require("./Token");
var TokenType_1 = require("./TokenType");
var Lexer = /** @class */ (function () {
    function Lexer(code) {
        this.TokenList = [];
        this.Code = code;
    }
    Lexer.prototype.create_token_list = function () {
        for (var index = 0; index < this.Code.length; index++) {
            if (this.Code[index] === '*') {
                this.Token_current = new Token_1.Token(TokenType_1.TokenType.MAIN_SYMBOLL, '*');
                this.TokenList.push(this.Token_current);
                this.Token_current = null;
            }
            if (this.Code[index] === '[') {
                this.Token_current = new Token_1.Token(TokenType_1.TokenType.LPAR, '[');
                this.TokenList.push(this.Token_current);
                this.Token_current = null;
            }
            if (this.Code[index] === ']') {
                this.Token_current = new Token_1.Token(TokenType_1.TokenType.RPAR, ']');
                this.TokenList.push(this.Token_current);
                this.Token_current = null;
            }
            if (this.Code[index] === '+') {
                this.Token_current = new Token_1.Token(TokenType_1.TokenType.PLUS, '+');
                this.TokenList.push(this.Token_current);
                this.Token_current = null;
            }
            if (this.Code[index] === '-') {
                this.Token_current = new Token_1.Token(TokenType_1.TokenType.MINUS, '-');
                this.TokenList.push(this.Token_current);
                this.Token_current = null;
            }
        }
    };
    return Lexer;
}());
exports.default = Lexer;
