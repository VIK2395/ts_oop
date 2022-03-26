/* eslint-disable @typescript-eslint/no-inferrable-types */

// No access modifiers are allowed in iterfaces at all, even public; at the same time, all the properties are always public & abstract.
// An interface is just a PUBLIC contract; anything that implements the interface must have these properties and methods as public.

/* TypeScript. Interfaces CAN'T have any method implementations but CAN have property types (PRE)DEFINED with literal and union types.
They are (PRE)DEFINED, NOT INITIALIZED. This means that we have to INITIALIZE them yourself when creating instances.
The main is for resulting instances to fit corresponding interfaces. readonly and ? are applicable within interfaces. */

/* Java 8-9. Interfaces CAN'T have any method implementations but CAN have properties DEFINED.
When instances created, we don't have to initialize the properties.
The properties are initialized automatically. They are always static & final. 
Java 8-9. Interfaces CAN have static, default, private methods with implementations. */

// We can implement many interfaces at the same time.

/* Abstract classes can have method implementations, properties definitions,
and different access modifiers both abstract and non-abstract. But abstract with access modifiers
are a bit useless because no warnings shown when violating/overriding the modifiers */

// We can extend only one class at the same time.

export {};

interface ISinger {
  readonly id: number;
  name: string;
  albums: 27;
  popularity?: 'low' | 'middle' | 'high';
  // sing: (words: string) => void;
  sing(words: string): void;
}

class Singer implements ISinger {
  // NO warnings shown that ISinger.id is readonly
  id: number = 1; // initialization
  name: string = 'unknown'; // intialization
  albums: 27 = 27; // initialization
  popularity: 'low' | 'middle' | 'high';
  private privateProp: string = 'privateProp';
  protected protectedProp: string = 'protectedProp';

  constructor(name: string, popularity?: 'low' | 'middle' | 'high') {
    console.log(this); // new initializував
    this.name = name;
    console.log('name(constructor prop): ' + this.name);
    // initialization
    this.popularity = popularity;
  }

  sing(words: string): void {
    console.log(words);
  }

  setAlbums(albums: 27) {
    this.albums = albums;
  }
}

const singer = new Singer('Biber', 'high');

console.log(singer);

singer.sing('Lalala!');

// Reassign works because readonly was NOT applied to Singer.id
singer.id = 5;

// private and protected are not visible
// singer.privateProp
// singer.protectedProp

console.log(singer.hasOwnProperty('popularity'));
