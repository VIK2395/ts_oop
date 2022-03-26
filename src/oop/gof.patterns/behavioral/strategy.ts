export {};

// https://www.tutorialspoint.com/design_pattern/strategy_pattern.htm
// https://refactoring.guru/design-patterns/strategy

interface IStrategy {
  doOperation: (a: number, b: number) => number;
}

class OperationAdd implements IStrategy {
  // @Override
  doOperation(a: number, b: number): number {
    return a + b;
  }
}

class OperationSubstract implements IStrategy {
  // @Override
  doOperation(a: number, b: number): number {
    return a - b;
  }
}

class OperationMultiply implements IStrategy {
  // @Override
  doOperation(a: number, b: number): number {
    return a * b;
  }
}

class Context {
  private strategy: IStrategy;

  constructor(strategy: IStrategy) {
    this.strategy = strategy;
  }

  executeStrategy(a: number, b: number): number {
    return this.strategy.doOperation(a, b);
  }
}

let context: Context = new Context(new OperationAdd());

console.log('10 + 5 = ' + context.executeStrategy(10, 5));

context = new Context(new OperationSubstract());

console.log('10 - 5 = ' + context.executeStrategy(10, 5));

context = new Context(new OperationMultiply());

console.log('10 * 5 = ' + context.executeStrategy(10, 5));
