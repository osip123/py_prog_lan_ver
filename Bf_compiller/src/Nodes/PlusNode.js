"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PlusNode = /** @class */ (function () {
    function PlusNode(x, y) {
        this.x = x;
        this.y = y;
    }
    PlusNode.prototype.calc = function () {
        return this.x + this.y;
    };
    return PlusNode;
}());
exports.default = PlusNode;
