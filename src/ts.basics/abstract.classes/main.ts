import { Cat } from './cat';

const cat1 = new Cat('Masanao', { hasBrain: true });
const cat2 = new Cat('Emanuel', { canReproduce: true });

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
