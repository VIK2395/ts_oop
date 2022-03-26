import { Animal } from './animal';

function getRandomIntInclusive(min: number, max: number): number {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export class Cat extends Animal {
  // @Override
  // NO warnings shown that Animal.random is PROTECTED abstract
  public random: number = getRandomIntInclusive(0, 1000);

  constructor(public name: string, common: Record<string, any>) {
    super(common);
    this.name = name;
  }

  // @Override
  // NO warnings shown that Animal.makeNoise is protected abstract
  public makeNoise(): void {
    console.log('Cat makeNoise method called');
  }
}
