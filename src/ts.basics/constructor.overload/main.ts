export {};

// In TS, we can have many declaration overloads,
// but only one implementation with a signature that is compatible with all overloads.

// In Java, there are no declaration overloads,
// but there are many overload implementations.

interface IBox {
  x: number;
  y: number;
  height: number;
  width: number;
}

class Box implements IBox {
  x: number;
  y: number;
  height: number;
  width: number;

  constructor(); // (*1)
  constructor(obj: IBox); // (*2)
  constructor(obj?: IBox) {
    this.x = obj?.x ?? 0;
    this.y = obj?.y ?? 0;
    this.height = obj?.height ?? 0;
    this.width = obj?.width ?? 0;
  }

  unbox(): void {
    console.log('Unboxed');
  }
}

const box = new Box({ x: 1, y: 2, height: 1, width: 3 });
