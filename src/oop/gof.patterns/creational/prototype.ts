export {};

// make an configured prototype INSTANCE copy

// https://www.youtube.com/watch?v=bTiAfLbmsnY
// https://www.dofactory.com/javascript/design-patterns/prototype

// ts.compiler.error
// https://refactoring.guru/design-patterns/prototype

// Object.create()
// https://refactoring.guru/design-patterns/prototype/typescript/example

type Type = 'sedan' | 'coupe' | 'hatchback' | 'Roadster';

abstract class Car {
  constructor(
    public brand: string,
    public model: string,
    public price: number,
    public type: Type,
  ) {}

  abstract clone(): Car;
}

class Tesla extends Car {
  hasSuperCharge: boolean;

  constructor(model: string, price: number, type: Type, hasSuperCharge: boolean) {
    super('Tesla', model, price, type);
    this.hasSuperCharge = hasSuperCharge;
  }

  clone(): Tesla {
    // Object.create(this)...
    return new Tesla(this.model, this.price, this.type, this.hasSuperCharge);
  }
}

const modelY = new Tesla('modelY', 90, 'sedan', true);

console.log(modelY);

const modelYClone = modelY.clone();

modelYClone.hasSuperCharge = false;

console.log(modelY);

console.log(modelYClone);

console.log(modelY === modelYClone);
