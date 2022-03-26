"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var cat_1 = require("./cat");
var cat1 = new cat_1.Cat('Masanao', { hasBrain: true });
var cat2 = new cat_1.Cat('Emanuel', { canReproduce: true });
console.dir(cat1);
console.dir(cat2);
// common is protected
// In TS, protected modifier does NOT allow accessing property from class/subclass instances
// In Java, it is allowed
// console.dir(cat1.common);
console.log(cat1.random);
cat1.setCommon({ hasBrain: false });
console.dir(cat1);
console.dir(cat2);
console.log(Object.getPrototypeOf(cat1));
