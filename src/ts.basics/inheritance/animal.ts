// https://www.tutorialsteacher.com/typescript/abstract-class

// abstract + access modifiers // The same behavior in Java!
// https://stackoverflow.com/questions/48864539/why-abstract-method-access-modifiers-dont-need-to-be-honoured-by-the-implemente

export class Animal {
  public common: Record<string, any>;

  constructor(common: Record<string, any>) {
    this.common = common;
  }

  setCommon(common: Record<string, any>): void {
    this.common = common;
  }
}
