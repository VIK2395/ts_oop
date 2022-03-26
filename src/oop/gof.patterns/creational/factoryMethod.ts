export {};

// https://www.tutorialspoint.com/design_pattern/factory_pattern.htm
// https://refactoring.guru/design-patterns/factory-method

interface IFigure {
  draw(): void;
}

class Rectangle implements IFigure {
  draw(): void {
    console.log('Draw Rectangle');
  }
}

class Square implements IFigure {
  draw(): void {
    console.log('Draw Square');
  }
}

class Circle implements IFigure {
  draw(): void {
    console.log('Draw Circle');
  }
}

class FigureFactory {
  getFigure(figureType: string): IFigure {
    let figure: IFigure;

    switch (figureType) {
      case 'Rectangle':
        figure = new Rectangle();
        break;
      case 'Square':
        figure = new Square();
        break;
      case 'Circle':
        figure = new Circle();
        break;
      default:
        throw new Error('Unknown figure!');
    }

    return figure;
  }
}

const figureFactory: FigureFactory = new FigureFactory();

const rectangle: IFigure = figureFactory.getFigure('Rectangle');
const square: IFigure = figureFactory.getFigure('Square');
const circle: IFigure = figureFactory.getFigure('Circle');

rectangle.draw();
square.draw();
circle.draw();
