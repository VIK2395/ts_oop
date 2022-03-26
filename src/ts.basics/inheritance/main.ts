import { Cat } from './cat';

const cat1 = new Cat('Masanao', { hasBrain: true });
const cat2 = new Cat('Emanuel', { canReproduce: true });

console.dir(cat1);
console.dir(cat2);

cat1.setCommon({ hasBrain: false });

console.dir(cat1);
console.dir(cat2);

const prototypeOfCat1 = Object.getPrototypeOf(cat1);
const prototypeOfCat2 = Object.getPrototypeOf(cat2);

console.log(prototypeOfCat1);
console.dir(prototypeOfCat2);

console.log(prototypeOfCat1 === prototypeOfCat2);
