export {};

// build complex objects step by step. Automate routine work with director class

// https://www.youtube.com/watch?v=bTiAfLbmsnY
// https://www.youtube.com/watch?v=MaY_MDdWkQw&list=PLlsmxlJgn1HJpa28yHzkBmUY-Ty71ZUGc&index=5
// https://refactoring.guru/design-patterns/builder
// https://howtodoinjava.com/design-patterns/creational/builder-pattern-in-java/
// https://www.youtube.com/watch?v=M7Xi1yO_s8E
// https://en.wikipedia.org/wiki/Builder_pattern

// NO ESCAPING UNDEFINED FIELDS POSSIBLE IN THIS PATTERN

type Color = 'red' | 'blue' | 'yellow';
type Type = 'sedan' | 'coupe' | 'hatchback' | 'roadster';

// contract on methods to fill the class fields; because properties can be absent
interface IBuilder {
  setBrand(brand: string): IBuilder;
  setModel(model: string): IBuilder;
  setColor(color: Color): IBuilder;
  setPrice(price: number): IBuilder;
  setType(type: Type): IBuilder;
}

class Car {
  constructor(
    private readonly brand: string,
    private readonly model: string,
    private readonly color: Color,
    private readonly price: number,
    private readonly type: Type,
  ) {}
}

class CarBuilder implements IBuilder {
  private brand: string;
  private model: string;
  private color: Color;
  private price: number;
  private type: Type;

  setBrand(brand: string): CarBuilder {
    this.brand = brand;
    return this;
  }

  setModel(model: string): CarBuilder {
    this.model = model;
    return this;
  }

  setColor(color: Color): CarBuilder {
    this.color = color;
    return this;
  }

  setPrice(price: number): CarBuilder {
    this.price = price;
    return this;
  }

  setType(type: Type): CarBuilder {
    this.type = type;
    return this;
  }

  reset(): void {
    this.brand = undefined;
    this.model = undefined;
    this.color = undefined;
    this.price = undefined;
    this.type = undefined;
  }

  build(): Car {
    const car: Car = new Car(this.brand, this.model, this.color, this.price, this.type);
    this.reset();
    return car;
  }
}

class Director {
  buildSportCar(carBuilder: CarBuilder) {
    carBuilder
      .setBrand('Bugatti')
      .setModel('chiron')
      .setColor('blue')
      .setPrice(2_300_000)
      .setType('sedan');
  }
  buildFamilyCar(carBuilder: CarBuilder) {
    carBuilder
      .setBrand('Volkswagen')
      .setModel('tiguan')
      .setColor('yellow')
      .setPrice(60)
      .setType('coupe');
  }
}

const carBuilder: CarBuilder = new CarBuilder();

const tesla = carBuilder.setBrand('Tesla').setModel('modelY').build();

console.log(tesla);

const director: Director = new Director();

director.buildSportCar(carBuilder);

const sport = carBuilder.build();

console.log(sport);

const reset = carBuilder.build();

console.log(reset);
