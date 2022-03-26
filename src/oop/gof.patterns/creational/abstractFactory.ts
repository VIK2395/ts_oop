export {};

// Factory of factories

// https://www.tutorialspoint.com/design_pattern/abstract_factory_pattern.htm
// https://refactoring.guru/design-patterns/abstract-factory
// https://www.javatpoint.com/abstract-factory-pattern

interface IFigure {
  draw(): void;
}

class Rectangle implements IFigure {
  draw(): void {
    console.log('Draw rectangle');
  }
}

class Square implements IFigure {
  draw(): void {
    console.log('Draw square');
  }
}

class RoundedRectangle implements IFigure {
  draw(): void {
    console.log('Draw rounded rectangle');
  }
}

class RoundedSquare implements IFigure {
  draw(): void {
    console.log('Draw rounded square');
  }
}

abstract class AbstractFactory {
  abstract getFigure(figureType: string): IFigure;
}

class FigureFactory extends AbstractFactory {
  getFigure(figureType: string): IFigure {
    let figure: IFigure;

    switch (figureType) {
      case 'rectangle':
        figure = new Rectangle();
        break;
      case 'square':
        figure = new Square();
        break;
      default:
        throw new Error('Unknown figure!');
    }

    return figure;
  }
}

class RoundedFigureFactory extends AbstractFactory {
  getFigure(figureType: string): IFigure {
    let figure: IFigure;

    switch (figureType) {
      case 'rectangle':
        figure = new RoundedRectangle();
        break;
      case 'square':
        figure = new RoundedSquare();
        break;
      default:
        throw new Error('Unknown figure!');
    }

    return figure;
  }
}

abstract class FactoryCreator {
  static getFactory(factoryType: string): AbstractFactory {
    let factory: AbstractFactory;

    switch (factoryType) {
      case 'sharp':
        factory = new FigureFactory();
        break;
      case 'round':
        factory = new RoundedFigureFactory();
        break;
      default:
        throw new Error('Unknown factory!');
    }

    return factory;
  }
}

const roundFigureFactory = FactoryCreator.getFactory('round');

const roundSquare = roundFigureFactory.getFigure('square');
const roundRectangle = roundFigureFactory.getFigure('rectangle');

roundSquare.draw();
roundRectangle.draw();
