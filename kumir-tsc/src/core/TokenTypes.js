"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TokenTypes = void 0;
var TokenTypes;
(function (TokenTypes) {
    TokenTypes[TokenTypes["START"] = 0] = "START";
    TokenTypes[TokenTypes["END"] = 1] = "END";
    TokenTypes[TokenTypes["WHILE"] = 2] = "WHILE";
    TokenTypes[TokenTypes["DO"] = 3] = "DO";
    TokenTypes[TokenTypes["FOR"] = 4] = "FOR";
    TokenTypes[TokenTypes["IF"] = 5] = "IF";
    TokenTypes[TokenTypes["ELSE"] = 6] = "ELSE";
    TokenTypes[TokenTypes["RETURN"] = 7] = "RETURN";
    TokenTypes[TokenTypes["FLOAT"] = 8] = "FLOAT";
    TokenTypes[TokenTypes["INT"] = 9] = "INT";
    TokenTypes[TokenTypes["EQ"] = 10] = "EQ";
    TokenTypes[TokenTypes["MINUS"] = 11] = "MINUS";
    TokenTypes[TokenTypes["PLUS"] = 12] = "PLUS";
    TokenTypes[TokenTypes["COMADOT"] = 13] = "COMADOT";
    TokenTypes[TokenTypes["LESS"] = 14] = "LESS";
    TokenTypes[TokenTypes["MORE"] = 15] = "MORE";
    TokenTypes[TokenTypes["LPAR"] = 16] = "LPAR";
    TokenTypes[TokenTypes["RPAR"] = 17] = "RPAR";
    TokenTypes[TokenTypes["VAR"] = 18] = "VAR";
})(TokenTypes || (exports.TokenTypes = TokenTypes = {}));
