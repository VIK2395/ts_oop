export {};

// https://refactoring.guru/design-patterns/mediator
// https://refactoring.guru/design-patterns/mediator/typescript/example
// https://www.youtube.com/watch?v=bTiAfLbmsnY
// https://www.tutorialspoint.com/design_pattern/mediator_pattern.htm
// https://www.youtube.com/watch?v=35D5cBosD4c&list=PLlsmxlJgn1HJpa28yHzkBmUY-Ty71ZUGc&index=10

// Mediator is central class through which classes communicate

interface IMediator {
  notify(sender: IComponent): void;
}

interface IComponent {
  setMediator(mediator: IMediator): void;
  getName(): string;
}

// Concrete mediator
class CounterProcessor implements IMediator {
  constructor(
    // Components to communicate with each other through CounterProcessor mediator
    private display: Display,
    private increaseButton: IncreaseButton,
    private decreaseButton: DecreaseButton,
    private doubleIncreaseButton: DoubleIncreaseButton,
    private doubleDecreaseButton: DoubleDecreaseButton,
    private resetButton: ResetButton,
    private printButton: PrintButton,
  ) {
    this.display = display;
    this.display.setMediator(this);
    this.increaseButton = increaseButton;
    this.increaseButton.setMediator(this);
    this.decreaseButton = decreaseButton;
    this.decreaseButton.setMediator(this);
    this.doubleIncreaseButton = doubleIncreaseButton;
    this.doubleIncreaseButton.setMediator(this);
    this.doubleDecreaseButton = doubleDecreaseButton;
    this.doubleDecreaseButton.setMediator(this);
    this.resetButton = resetButton;
    this.resetButton.setMediator(this);
    this.printButton = printButton;
    this.printButton.setMediator(this);
  }

  public notify(sender: IComponent): void {
    switch (sender.getName()) {
      case 'INCREASE_BUTTON': {
        this.display.output++;
        break;
      }
      case 'DECREASE_BUTTON': {
        this.display.output--;
        break;
      }
      case 'DOUBLE_INCREASE_BUTTON': {
        this.increaseButton.click();
        this.increaseButton.click();
        break;
      }
      case 'DOUBLE_DECREASE_BUTTON': {
        this.decreaseButton.click();
        this.decreaseButton.click();
        break;
      }
      case 'RESET_BUTTON': {
        this.display.output = 0;
        break;
      }
      case 'PRINT_BUTTON': {
        this.display.printOutput();
        break;
      }
      default: {
        console.log('UNRECOGNIZED_BUTTON');
        break;
      }
    }
  }
}

class Component implements IComponent {
  protected name: string;
  protected mediator: IMediator;

  constructor(name: string, mediator: IMediator = null) {
    this.name = name;
    this.mediator = mediator;
  }

  setMediator(mediator: IMediator): void {
    this.mediator = mediator;
  }

  getName(): string {
    return this.name;
  }
}

class Display extends Component {
  output: number;

  constructor(name: string, mediator?: IMediator) {
    super(name, mediator);
    this.output = 0;
  }

  printOutput(): void {
    console.log(`Output: ${this.output}`);
  }
}

class IncreaseButton extends Component {
  click(): void {
    this.mediator.notify(this); // this => call ctx
  }
}

class DecreaseButton extends Component {
  click(): void {
    this.mediator.notify(this);
  }
}

class DoubleIncreaseButton extends Component {
  click(): void {
    this.mediator.notify(this);
  }
}

class DoubleDecreaseButton extends Component {
  click(): void {
    this.mediator.notify(this);
  }
}

class ResetButton extends Component {
  click(): void {
    this.mediator.notify(this);
  }
}

class PrintButton extends Component {
  click(): void {
    this.mediator.notify(this);
  }
}

const display = new Display('DISPLAY');
const increaseButton = new IncreaseButton('INCREASE_BUTTON');
const decreaseButton = new DecreaseButton('DECREASE_BUTTON');
const doubleIncreaseButton = new DoubleIncreaseButton('DOUBLE_INCREASE_BUTTON');
const doubleDecreaseButton = new DoubleDecreaseButton('DOUBLE_DECREASE_BUTTON');
const resetButton = new ResetButton('RESET_BUTTON');
const printButton = new PrintButton('PRINT_BUTTON');

// Mediator
new CounterProcessor(
  display,
  increaseButton,
  decreaseButton,
  doubleIncreaseButton,
  doubleDecreaseButton,
  resetButton,
  printButton,
);

printButton.click();

increaseButton.click();
printButton.click();

decreaseButton.click();
printButton.click();

doubleIncreaseButton.click();
printButton.click();

resetButton.click();
printButton.click();
