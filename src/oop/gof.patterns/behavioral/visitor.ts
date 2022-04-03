export {};

// Adding new behaviors to existing class hierarchy without altering any EXISTING code.
// But extending the class code.
// Double dispatch.

// https://www.youtube.com/watch?v=bTiAfLbmsnY
// https://refactoring.guru/design-patterns/visitor
// https://refactoring.guru/design-patterns/visitor/java/example

type Xml = string;

interface IShape {
  move(x: number, y: number): void;
  draw(): void;
  accept(visitor: IVisitor): Xml;
}

interface IVisitor {
  visitDot(dot: Dot): Xml; // Dot => Concrete class
  visitRectangle(rectangle: Rectangle): Xml; // Rectangle => Concrete class
}

class Dot implements IShape {
  constructor(private id: number, private x: number, private y: number) {}

  move(x: number, y: number): void {
    console.log(`Dot ${this.id} move to x:${x}, y:${y}`);
  }

  draw(): void {
    console.log(`Draw Dot ${this.id}`);
  }

  accept(visitor: IVisitor): Xml {
    return visitor.visitDot(this);
  }

  alert(): void {
    console.log(`Dot ${this.id} has been visited`);
  }

  getX(): number {
    return this.x;
  }

  getY(): number {
    return this.y;
  }

  getId(): number {
    return this.id;
  }
}

class Rectangle implements IShape {
  constructor(
    private id: number,
    private x: number,
    private y: number,
    private width: number,
    private height: number,
  ) {}

  move(x: number, y: number): void {
    console.log(`Rectangle ${this.id} move to x:${x}, y:${y}`);
  }

  draw(): void {
    console.log(`Draw Rectangle ${this.id}`);
  }

  accept(visitor: IVisitor): Xml {
    return visitor.visitRectangle(this);
  }

  getX(): number {
    return this.x;
  }

  getY(): number {
    return this.y;
  }

  getWidth(): number {
    return this.width;
  }

  getHeight(): number {
    return this.height;
  }

  getId(): number {
    return this.id;
  }
}

class XmlExportVisitor implements IVisitor {
  visitDot(d: Dot): Xml {
    d.alert(); // Concrete class method call

    return (
      `<dot>\n` +
      `    <id>${d.getId()}</id>\n` +
      `    <x>${d.getX()}</x>\n` +
      `    <y>${d.getY()}</y>\n` +
      `</dot>`
    );
  }

  visitRectangle(r: Rectangle): Xml {
    return (
      `<rectangle>\n` +
      `    <id>${r.getId()}</id>\n` +
      `    <x>${r.getX()}</x>\n` +
      `    <y>${r.getY()}</y>\n` +
      `    <width>${r.getWidth()}</width>\n` +
      `    <height>${r.getHeight()}</height>\n` +
      `</rectangle>`
    );
  }

  export(shapes: IShape[]): Xml {
    let xml: Xml = '<?xml version="1.0" encoding="utf-8"?>';

    for (const shape of shapes) {
      xml = xml + '\n' + shape.accept(this);
    }

    return xml;
  }
}

const dot1: Dot = new Dot(1, 0, 0);
const dot2: Dot = new Dot(2, 100, 500);
const rectangle: Rectangle = new Rectangle(1, 50, 25, 100, 50);

const shapes: IShape[] = [dot1, dot2, rectangle];

const xmlExportVisitor: XmlExportVisitor = new XmlExportVisitor();

console.log(xmlExportVisitor.export(shapes));
