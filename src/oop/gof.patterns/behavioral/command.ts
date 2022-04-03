export {};

// (*) Before
// Client -> Interface(UI) layer --(request)--> Buissenes logic layer
//                 Driver                              Engine
// Direct communication between driver and engine.
// Driver has access to engine properties.

// (*) After
// Client -> Interface(UI) layer --(request)--> Command layer | wrapper on buissenes layer | mediator -> Buissenes logic layer
//         Driver::command.execute()                              Car key::execute()                          Engine
//            Invoker | Sender                                         Command                               Receiver
// Communication between driver and engine through command layer.
// Driver does not have access to engine properties.

// https://www.youtube.com/watch?v=bTiAfLbmsnY
// https://www.youtube.com/watch?v=UfGD60BYzPM&list=PLlsmxlJgn1HJpa28yHzkBmUY-Ty71ZUGc&index=8&t=207s
// https://refactoring.guru/design-patterns/command

interface ICommand {
  execute(): void;
}

// Concrete command
class TurnOnCommand implements ICommand {
  // Receiver
  private engine: Engine;

  constructor(engine: Engine) {
    this.engine = engine;
  }

  execute(): void {
    this.engine.turnOn();
  }
}

// Concrete command
class TurnOffCommand implements ICommand {
  // Receiver
  private engine: Engine;

  constructor(engine: Engine) {
    this.engine = engine;
  }

  execute(): void {
    this.engine.turnOff();
  }
}

// Receiver
class Engine {
  // Buisness fields
  private turnedOn: boolean;

  constructor(turnedOn: boolean = false) {
    this.turnedOn = turnedOn;
  }

  turnOn(): void {
    this.turnedOn = true;
  }

  turnOff(): void {
    this.turnedOn = false;
  }
}

// Invoker
class Driver {
  private turnOnCommand: ICommand;
  private turnOffCommand: ICommand;

  constructor(private name: string) {
    this.name = name;
  }

  setTurnOnCommand(command: ICommand) {
    this.turnOnCommand = command;
  }

  setTurnOffCommand(command: ICommand) {
    this.turnOffCommand = command;
  }

  startEngine(): void {
    this.turnOnCommand.execute();
  }

  stopEngine(): void {
    this.turnOffCommand.execute();
  }

  testEngine(): void {
    this.turnOnCommand.execute();
    this.turnOffCommand.execute();
  }
}

// Invoker
const driver: Driver = new Driver('John');
// Receiver
const engine: Engine = new Engine();
// Create concrete commands
const turnOnCommand: TurnOnCommand = new TurnOnCommand(engine);
const turnOffCommand: TurnOffCommand = new TurnOffCommand(engine);
// Set commands
driver.setTurnOnCommand(turnOnCommand);
driver.setTurnOffCommand(turnOffCommand);
// Use invoker
console.log(engine);
driver.startEngine();
console.log(engine);
driver.stopEngine();
console.log(engine);
driver.startEngine();
console.log(engine);
driver.testEngine();
console.log(engine);

// const invoker = new Invoker();
// const receiver = new Receiver();
// const concreteCommand1 = new ConcreteCommand1(receiver, paramsForReceiver);
// invoker.setConcreteCommand1(concreteCommand1);
// invoker.runMethodThatUsesConcreteCommand1Execute();
