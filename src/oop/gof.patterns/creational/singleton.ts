/* eslint-disable @typescript-eslint/no-empty-function */
export {};

// https://www.tutorialspoint.com/design_pattern/singleton_pattern.htm
// https://refactoring.guru/design-patterns/singleton

// Here about immediate and lazy initialization
// https://en.wikipedia.org/wiki/Singleton_pattern

// Create only one instance of a class

class ImmedieteDatabase {
  // static has to be accessible before class instantiation!!!
  // so when ImmedieteDatabase class is registered, its static field gets initialized!!!
  private static instance: ImmedieteDatabase = new ImmedieteDatabase();

  // private to disable ability to create new instances from outside
  private constructor() {
    console.log('new ImmedieteDatabase()');
    console.log(this);
    console.log('ImmedieteDatabase.instance: ', ImmedieteDatabase.instance);
    // (1) ImmedieteDatabase.instance:  undefined => (2) ImmedieteDatabase.instance: ImmedieteDatabase {}
    // before exiting the constuctor => state 1, after exiting the constructor => state 2 !!!
  }

  static getInstance(): ImmedieteDatabase {
    console.log('ImmedieteDatabase.getInstance()');
    return ImmedieteDatabase.instance;
  }

  query(sql): void {
    console.log(`${sql} :: ImmedieteDatabase query has run`);
  }
}

console.log();

console.log(ImmedieteDatabase);

// No constructor call again here
const immediatedb: ImmedieteDatabase = ImmedieteDatabase.getInstance();

immediatedb.query('SELECT * FROM ...');

console.log();

class LazyDatabase {
  // Any type can be initialized with null with no warnings | errors
  private static instance: LazyDatabase = null;

  private constructor() {
    console.log('LazyDatabase.instance: ', LazyDatabase.instance);
    console.log('new LazyDatabase()');
  }

  static getInstance(): LazyDatabase {
    console.log('LazyDatabase.getInstance()');
    if (LazyDatabase.instance === null) {
      LazyDatabase.instance = new LazyDatabase();
    }
    return LazyDatabase.instance;
  }

  query(sql): void {
    console.log(`${sql} :: LazyDatabase query has run`);
  }
}

const lazydb1: LazyDatabase = LazyDatabase.getInstance();
const lazydb2: LazyDatabase = LazyDatabase.getInstance();

lazydb1.query('SELECT * FROM ...');

console.log(lazydb1 === lazydb2);
