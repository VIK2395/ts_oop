// https://www.tutorialsteacher.com/typescript/abstract-class

// abstract + access modifiers // Java behaves the same way!!!
// https://stackoverflow.com/questions/48864539/why-abstract-method-access-modifiers-dont-need-to-be-honoured-by-the-implemente

// Abstract classes to provide common code for subclasses, othervise use interfaces!!!

export abstract class Animal {
  public abstract name: string;
  protected abstract random: number;

  public birthday: Date = new Date();
  protected common: Record<string, any>;

  constructor(common: Record<string, any>) {
    this.common = common;
  }

  protected abstract makeNoise(): void;

  setCommon(common: Record<string, any>): void {
    this.common = common;
  }

  getCommon(): Record<string, any> {
    return this.common;
  }

  whoAmI(): void {
    console.log('You are an animal');
  }
}
