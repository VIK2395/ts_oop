import { delay } from '../../utils/delay.js';

// class fields
class Empty {
  uuuu;
  id;
  name;
  age;
  date;
}

// class fields
class Singer {
  uuuu = 5;
  id = 1;
  name = 'unknown';
  age = 27;
  date = new Date();
}

const empty = new Empty();

const singer = new Singer();

console.log(empty);

console.log(singer);

console.log('\nWait...\n');

await delay(2000);

class SingerWithConstructor {
  uuuu;
  id = 2;
  name = 'unknown';
  age = 2;
  date = new Date();

  constructor(alboms, h) {
    console.log(this);
    this.alboms = alboms;
    this.h = h;
    console.log(this);
  }
}

const singerWithConstructor = new SingerWithConstructor(27);

console.log('\nAfter constructor:\n');

console.log(singerWithConstructor);
