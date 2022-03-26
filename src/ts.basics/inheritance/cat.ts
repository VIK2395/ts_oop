import { Animal } from './animal';

export class Cat extends Animal {
  public name: string;

  constructor(name: string, common: Record<string, any>) {
    super(common);
    this.name = name;
  }

  someMethod(): void {
    console.log('someMethod called');
  }
}
