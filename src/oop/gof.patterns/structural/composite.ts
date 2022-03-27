export {};

// https://www.youtube.com/watch?v=bTiAfLbmsnY
// https://www.youtube.com/watch?v=oo9AsGqnisk&list=PLlsmxlJgn1HJpa28yHzkBmUY-Ty71ZUGc&index=19
// https://refactoring.guru/design-patterns/composite

// Make sense only when classes can be represented as a tree.
// Composite objects into tree structure and then ran throught this structure from top to bottom.
// Due to the same interface, the client doesn’t know whether it’s working with a simple object
// or a set of objects (compound object).

interface IProduct {
  getPrice(): number;
}

abstract class Product implements IProduct {
  private readonly title: string;
  private readonly price: number;

  constructor(title: string, price: number) {
    this.title = title;
    this.price = price;
  }

  getPrice(): number {
    return this.price;
  }
}

class VideoGame extends Product {
  constructor(title: string, price: number) {
    super(title, price);
  }
}

class Book extends Product {
  constructor(title: string, price: number) {
    super(title, price);
  }
}

class CompositeBox implements IProduct {
  private readonly children: IProduct[];

  constructor() {
    this.children = [];
  }

  add(child: IProduct) {
    this.children.push(child);
  }

  remove(child: IProduct) {
    const index = this.children.indexOf(child);
    if (index !== -1) {
      this.children.splice(index, 1);
    }
  }

  getPrice(): number {
    return this.children.reduce((sum: number, item: IProduct) => sum + item.getPrice(), 0);
  }
}

const deliveryPackage: CompositeBox = new CompositeBox();

const videoGame: VideoGame = new VideoGame('God of War', 250);
const book: Book = new Book('Game of Thrones', 100);

const box: CompositeBox = new CompositeBox();
box.add(videoGame);
box.add(videoGame);
box.add(book);

deliveryPackage.add(box);
deliveryPackage.add(videoGame);
deliveryPackage.remove(videoGame);

console.log(deliveryPackage.getPrice());
