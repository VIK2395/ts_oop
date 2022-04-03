export {};

// traverse => обхід; спосіб обходу

// https://www.geeksforgeeks.org/iterator-pattern/
// https://www.tutorialspoint.com/design_pattern/iterator_pattern.htm
// https://refactoring.guru/design-patterns/iterator/typescript/example
// https://www.youtube.com/watch?v=YJVj4XNASDk&t=4593s
// https://javascript.info/iterable

// straight traversal vs reverse traversal

interface IIterator<T> {
  hasNext(): boolean; // done
  getNext(): T; // value
}

class ConcreteIterator<T> implements IIterator<T> {
  private readonly collection: T[];
  private index: number = 0;

  constructor(collection: T[]) {
    this.collection = collection;
  }

  hasNext(): boolean {
    // Here can be different logic to check next
    return this.index < this.collection.length;
  }

  getNext(): T {
    // Here can be different logic to traverse the collection
    return this.collection[this.index++];
  }
}

const iteratorv1 = new ConcreteIterator<number>([1, 2, 3, 4, 5]);

while (iteratorv1.hasNext()) {
  // next can be an object with methods,
  // and we can call these methods
  const next = iteratorv1.getNext();
  console.log(next);
}

// Aggregator
interface IIterableCollection<T> {
  // Here can be many different types of iterators
  // depending on traverse strategy/algorithm
  createIterator(): IIterator<T>;
}

class ConcreteIterableCollection<T> implements IIterableCollection<T> {
  private readonly collection: T[];

  constructor(elements: T[]) {
    this.collection = elements;
  }

  createIterator(): IIterator<T> {
    return new ConcreteIterator(this.collection);
  }
}

console.log();

const collection = new ConcreteIterableCollection<number>([1, 2, 3, 4, 5, 6, 7, 8, 9]);
const iteratorv2 = collection.createIterator();

while (iteratorv2.hasNext()) {
  console.log(iteratorv2.getNext());
}
