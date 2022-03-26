export {};

// execute several hendlers in paticular order

// https://www.youtube.com/watch?v=FafNcoBvVQo
// https://refactoring.guru/design-patterns/chain-of-responsibility
// https://www.tutorialspoint.com/design_pattern/chain_of_responsibility_pattern.htm
// https://www.youtube.com/watch?v=bTiAfLbmsnY

class Database {
  private readonly users: Map<string, string>;

  constructor() {
    this.users = new Map();
    this.users.set('user', 'userPassword');
    this.users.set('adminUser', 'adminUserPassword');
  }

  userExists(userName: string): boolean {
    return this.users.has(userName);
  }

  isUserPasswordValid(userName: string, enteredPassword: string): boolean {
    const userPassword: string = this.users.get(userName);
    return userPassword === enteredPassword;
  }
}

abstract class Handler {
  private next: Handler; // undefined by default

  setNextHandler(next: Handler): Handler {
    this.next = next;
    return next;
  }

  abstract handle(userName: string, userPassword: string): boolean;

  protected handleNext(userName: string, userPassword: string): boolean {
    if (!this.next) {
      // No next handler
      return true;
    }
    return this.next.handle(userName, userPassword);
  }
}

class UserExistsHandler extends Handler {
  private database: Database;

  constructor(database: Database) {
    super();
    this.database = database;
  }

  // @Override
  handle(userName: string, userPassword: string): boolean {
    if (!this.database.userExists(userName)) {
      console.log('userName was not found');
      return false;
    }
    return this.handleNext(userName, userPassword);
  }
}

class UserPasswordValidHandler extends Handler {
  private database: Database;

  constructor(database: Database) {
    super();
    this.database = database;
  }

  // @Override
  handle(userName: string, userPassword: string): boolean {
    if (!this.database.isUserPasswordValid(userName, userPassword)) {
      console.log('Invalid userPassword');
      return false;
    }
    return this.handleNext(userName, userPassword);
  }
}

class AdminRoleHandler extends Handler {
  // @Override
  handle(userName: string, userPassword: string): boolean {
    if (userName === 'adminUser') {
      console.log('Loading Admin page...');
      return true;
    }
    console.log('Loading Default page...');
    return this.handleNext(userName, userPassword);
  }
}

const database: Database = new Database();

const userExistsHandler: Handler = new UserExistsHandler(database);
const userPasswordValidHandler: Handler = new UserPasswordValidHandler(database);
const adminRoleHandler: Handler = new AdminRoleHandler();

userExistsHandler.setNextHandler(userPasswordValidHandler).setNextHandler(adminRoleHandler);

userExistsHandler.handle('adminUser', 'adminUserPassword');
