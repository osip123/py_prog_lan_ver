"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Token = void 0;
var Token = /** @class */ (function () {
    function Token(Type, Buffer) {
        this.Bufffer = Buffer;
        this.Type = Type;
    }
    Token.prototype.print = function () {
        console.log(this.Bufffer, this.Type);
    };
    return Token;
}());
exports.Token = Token;
