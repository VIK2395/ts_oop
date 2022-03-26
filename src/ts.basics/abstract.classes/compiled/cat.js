"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cat = void 0;
var animal_1 = require("./animal");
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat(name, common) {
        var _this = _super.call(this, common) || this;
        _this.name = name;
        // @Override
        // NO warnings shown that Animal.random is protected abstract
        _this.random = getRandomIntInclusive(0, 1000);
        _this.name = name;
        return _this;
    }
    // @Override
    // NO warnings shown that Animal.makeNoise is protected abstract
    Cat.prototype.makeNoise = function () {
        console.log('Cat makeNoise method called');
    };
    return Cat;
}(animal_1.Animal));
exports.Cat = Cat;
