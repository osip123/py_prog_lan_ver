"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MinusNode_1 = require("../Nodes/MinusNode");
var PlusNode_1 = require("../Nodes/PlusNode");
var Analyzer = /** @class */ (function () {
    function Analyzer(push_arry) {
        this.push_array = push_arry;
    }
    Analyzer.prototype.__run_code__ = function () {
        for (var index = 0; index < this.push_array.length; index++) {
            if (this.push_array[index] === '-' || this.push_array[index] === '+') {
                if (this.push_array[index] === '-') {
                    var minNode = new MinusNode_1.default(+this.push_array[index - 1], +this.push_array[index + 1]);
                    console.log(minNode.calc());
                }
                if (this.push_array[index] === '+') {
                    var pluNode = new PlusNode_1.default(+this.push_array[index - 1], +this.push_array[index + 1]);
                    console.log(pluNode.calc());
                }
            }
        }
    };
    return Analyzer;
}());
exports.default = Analyzer;
