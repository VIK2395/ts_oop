"use strict";
// https://www.tutorialsteacher.com/typescript/abstract-class
Object.defineProperty(exports, "__esModule", { value: true });
exports.Animal = void 0;
// abstract + access modifiers // The same behavior in Java!
// https://stackoverflow.com/questions/48864539/why-abstract-method-access-modifiers-dont-need-to-be-honoured-by-the-implemente
var Animal = /** @class */ (function () {
    function Animal(common) {
        this.common = common;
    }
    Animal.prototype.setCommon = function (common) {
        this.common = common;
    };
    return Animal;
}());
exports.Animal = Animal;
