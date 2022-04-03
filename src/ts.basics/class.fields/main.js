class User {
  name = 'John';
}

const user = new User();
console.log(user.name); // John
console.log(User.prototype.name); // undefined

class Cat {
  constructor(name) {
    this.name = name;
  }
}

const cat = new Cat('Garfield');
console.log(cat.name); // Garfield
console.log(Cat.prototype.name); // undefined
