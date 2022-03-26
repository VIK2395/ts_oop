"use strict";
// https://www.tutorialsteacher.com/typescript/abstract-class
Object.defineProperty(exports, "__esModule", { value: true });
exports.Animal = void 0;
// abstract + access modifiers // Java behaves the same way!!!
// https://stackoverflow.com/questions/48864539/why-abstract-method-access-modifiers-dont-need-to-be-honoured-by-the-implemente
var Animal = /** @class */ (function () {
    function Animal(common) {
        this.birthday = new Date();
        this.common = common;
    }
    Animal.prototype.setCommon = function (common) {
        this.common = common;
    };
    Animal.prototype.getCommon = function () {
        return this.common;
    };
    Animal.prototype.whoAmI = function () {
        console.log('You are an animal');
    };
    return Animal;
}());
exports.Animal = Animal;
