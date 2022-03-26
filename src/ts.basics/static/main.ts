/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-inferrable-types */
export {};

class Person {
  // Class fields
  instantiatedAt: Date = new Date();
  isHuman: boolean = true;

  // Static property
  static description: string = 'May the Force be with you.';

  // private constructor => constructor can be private in order not to work the call new Person(...)
  constructor(public name: string, readonly age: number, private role: string = 'none') {}

  // Static method
  static logDescription() {
    // Call static property within its class
    console.log(`Logger: ${Person.description}`);
  }

  sayHey() {
    console.log(`${this.name} says hey!`);
  }
}

const firstPerson = new Person('Luke', 18);
const secondPerson = new Person('Anakin', 37);

console.log(firstPerson);
console.log(secondPerson);

console.log(firstPerson.hasOwnProperty('description'));
console.log(secondPerson.hasOwnProperty('description'));

console.log(Person.prototype.hasOwnProperty('description'));
// console.log(firstPerson.__proto__.hasOwnProperty('description'));
console.log(Object.getPrototypeOf(firstPerson).hasOwnProperty('description'));

console.log(Person.description);

firstPerson.sayHey();
secondPerson.sayHey();

console.dir(Person.prototype, { depth: null });

Person.logDescription();

abstract class PersonFactory {
  protected abstract label: string;

  static getActorPersonInstance(name: string, age: number) {
    return new Person(name, age, 'Actor');
  }

  static getRapperPersonInstance(name: string, age: number) {
    return new Person(name, age, 'Rapper');
  }

  static getNonePersonInstance(name: string, age: number) {
    return new Person(name, age);
  }
}

const actorInstance = PersonFactory.getActorPersonInstance('Brad Pitt', 58);
const rapperInstance = PersonFactory.getRapperPersonInstance('Eminem', 49);
const noneInstance = PersonFactory.getNonePersonInstance('Justin Bieber', 27);

console.dir(actorInstance, { depth: null });
console.dir(rapperInstance, { depth: null });
console.dir(noneInstance, { depth: null });

class PersonFactorySub extends PersonFactory {
  protected label: string;

  constructor(label: string) {
    super();
    this.label = label;
  }
}

const personFactorySubInstance = new PersonFactorySub('personFactorySubInstance label');

console.dir(personFactorySubInstance, { depth: null });
// console.dir(personFactorySubInstance.label, { depth: null }); // error to access label

console.dir(Object.getPrototypeOf(personFactorySubInstance), { depth: null });
