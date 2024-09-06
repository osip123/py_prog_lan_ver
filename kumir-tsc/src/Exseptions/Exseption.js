"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ExseptionTypes_1 = require("./ExseptionTypes");
var Exseption = /** @class */ (function () {
    function Exseption(Type) {
        this.Message = '';
        this.Type = Type;
    }
    Exseption.prototype.create_exseption = function () {
        if (this.Type === ExseptionTypes_1.default.Varr) {
            this.Message.concat('Init Varrible Error! exit code -1');
        }
        return this.Message;
    };
    Exseption.prototype.__print_exrption = function () {
        var value = this.create_exseption();
        console.log(value);
    };
    return Exseption;
}());
exports.default = Exseption;
