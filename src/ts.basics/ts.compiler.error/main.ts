export {};

type Type = 'sedan' | 'coupe' | 'hatchback' | 'Roadster';

class Car {
  brand: string;
  model: string;
  price: number;
  type: Type;

  // Ось де ыстинне джерело
  // (***)
  constructor(car: Car) {
    this.brand = car.brand;
    this.model = car.model;
    this.price = car.price;
    this.type = car.type;
  }

  // річ не в abstract
  // тут компайлер тупить
  // перевырити в джава => в джава все гуд!
  // превырити версыю тс кампылятора
  // https://www.tutorialsteacher.com/typescript/abstract-class
  // тут подыбний приклад який вроды робочий
  // => повертати клас можна, не можна проеидуватийого як параметер
  // clone(): Car {
  //   return new Car(this);
  // }
  // This method mistakingly considered as a property by ts compiler (***)
  clone(): this {
    // 'this' type => binds subclass type hardly, not this superclass
    // https://www.digitalocean.com/community/tutorials/how-to-use-classes-in-typescript
    return Object.create(this);
  }
}

const b = new Car({
  brand: 'Tesla',
  model: 'modelY',
  price: 90,
  type: 'sedan',
});

// ts compiler mistake | error!!!
// google => property is missing in type but required in type class method
// https://angularquestions.com/2021/06/09/error-ts2741-property-is-missing-in-type-being-caused-by-the-existence-of-a-method/
// https://stackoverflow.com/questions/47239507/property-getreadableschedule-is-missing-in-type
// clone: () => ({} as Tesla),
