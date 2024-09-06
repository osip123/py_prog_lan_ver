"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TokenTypes_1 = require("../core/TokenTypes");
var Exseption_1 = require("../Exseptions/Exseption");
var ExseptionTypes_1 = require("../Exseptions/ExseptionTypes");
var fs = require('fs');
var CompillerCore = /** @class */ (function () {
    function CompillerCore(list_compille) {
        this.compille_code = ' ';
        this.Compille_List = list_compille;
    }
    CompillerCore.prototype.__run_compille = function () {
        for (var i = 0; i < this.Compille_List.length; i++) {
            if (this.Compille_List[i].Type === TokenTypes_1.TokenTypes.START) {
            }
            if (this.Compille_List[i].Type === TokenTypes_1.TokenTypes.INT) {
                this.compille_code = this.compille_code.concat("\n                    ".concat(this.Compille_List[i].Buffer, "\n                "));
            }
            if (this.Compille_List[i].Type === TokenTypes_1.TokenTypes.FLOAT) {
                this.compille_code = this.compille_code.concat("\n                    ".concat(this.Compille_List[i].Buffer, "\n                "));
            }
            if (this.Compille_List[i].Type === TokenTypes_1.TokenTypes.VAR) {
                this.compille_code = this.compille_code.concat("".concat(this.Compille_List[i].Buffer));
            }
            if (this.Compille_List[i].Type === TokenTypes_1.TokenTypes.EQ) {
                this.compille_code = this.compille_code[i].concat('=');
            }
            if (this.Compille_List[i].Type === TokenTypes_1.TokenTypes.WHILE) {
                this.compille_code = this.compille_code.concat('while');
            }
            if (this.Compille_List[i].Type === TokenTypes_1.TokenTypes.LPAR) {
                this.compille_code = this.compille_code.concat('(');
                if (this.Compille_List[i + 1].Type != TokenTypes_1.TokenTypes.INT
                    || this.Compille_List[i + 1].Type != TokenTypes_1.TokenTypes.FLOAT) {
                    var error = new Exseption_1.default(ExseptionTypes_1.default.Varr);
                    error.__print_exrption();
                }
            }
            if (this.Compille_List[i].Type === TokenTypes_1.TokenTypes.LPAR) {
                this.compille_code = this.compille_code.concat('(');
            }
            if (this.Compille_List[i].Type === TokenTypes_1.TokenTypes.RPAR) {
                this.compille_code = this.compille_code.concat(')');
            }
        }
        console.log(this.compille_code);
    };
    CompillerCore.prototype.__run_code = function () {
        this.__run_compille();
        var output = fs.writeFile('./output.js', this.compille_code);
    };
    return CompillerCore;
}());
exports.default = CompillerCore;
