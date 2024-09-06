"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Token = /** @class */ (function () {
    function Token(Type, Buffer, Name) {
        this.Buffer = Buffer;
        this.Name = Name;
        this.Type = Type;
    }
    Token.prototype.__print = function () {
        console.log(this.Buffer);
    };
    return Token;
}());
exports.default = Token;
