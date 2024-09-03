"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TokenType_1 = require("./TokenType");
var Parser = /** @class */ (function () {
    function Parser(TokenArry) {
        this.counter = 0;
        this.counter_Arry = [];
        this.TokensArry = TokenArry;
    }
    Parser.prototype.run_code = function () {
        for (var index = 0; index < this.TokensArry.length; index++) {
            if (this.TokensArry[index].Type === TokenType_1.TokenType.MAIN_SYMBOLL) {
                this.counter++;
            }
            if (this.TokensArry[index].Type === TokenType_1.TokenType.RPAR) {
                while (this.TokensArry[index].Type === TokenType_1.TokenType.LPAR) {
                    index--;
                    this.counter++;
                }
            }
            if (this.TokensArry[index].Type === TokenType_1.TokenType.PLUS) {
                this.counter_Arry.push(this.counter);
                this.counter = 0;
                this.counter_Arry.push('+');
            }
            if (this.TokensArry[index].Type == TokenType_1.TokenType.MINUS) {
                this.counter_Arry.push(this.counter);
                this.counter = 0;
                this.counter_Arry.push('-');
            }
        }
        return this.TokensArry;
    };
    return Parser;
}());
exports.default = Parser;
