"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MinusNode = /** @class */ (function () {
    function MinusNode(x, y) {
        this.x = x;
        this.y = y;
    }
    MinusNode.prototype.calc = function () {
        return this.x - this.y;
    };
    return MinusNode;
}());
exports.default = MinusNode;
