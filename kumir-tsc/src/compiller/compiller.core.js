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
            }
            if (this.Compille_List[i].Type === TokenTypes_1.TokenTypes.WHILE) {
                this.compille_code.concat('while');
            }
            if (this.Compille_List[i].Type === TokenTypes_1.TokenTypes.LPAR) {
                this.compille_code.concat('(');
                if (this.Compille_List[i + 1].Type != TokenTypes_1.TokenTypes.INT
                    || this.Compille_List[i + 1].Type != TokenTypes_1.TokenTypes.FLOAT) {
                    var error = new Exseption_1.default(ExseptionTypes_1.default.Varr);
                    error.__print_exrption();
                }
            }
            if (this.Compille_List[i].Type === TokenTypes_1.TokenTypes.LPAR) {
                this.compille_code.concat('(');
            }
            if (this.Compille_List[i].Type === TokenTypes_1.TokenTypes.RPAR) {
                this.compille_code.concat(')');
            }
        }
    };
    return CompillerCore;
}());
