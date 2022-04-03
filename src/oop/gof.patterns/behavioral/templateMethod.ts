export {};

// https://www.youtube.com/watch?v=bTiAfLbmsnY
// https://www.youtube.com/watch?v=cGoVDzHvD4A&list=PLlsmxlJgn1HJpa28yHzkBmUY-Ty71ZUGc&index=9
// https://refactoring.guru/design-patterns/template-method

// An algorithm is a set of successive/sequence actions/operations. (sequentially)

// Split an algorithm into a series of steps.
// Turn these steps into methods.
// Put these methods inside a single template method.
// Use inheritance to override different pieces of algorithms.

// BaseGameLoader
abstract class GameLoader {
  run() {
    this.checkForUpdates();
    this.downloadUpates();
    this.installUpdates();
    this.initializeGame();
    this.loadUserProfile();
    this.loadUserSavings();
    this.runGameMenu();
  }

  abstract checkForUpdates(): void;
  abstract downloadUpates(): void;
  abstract installUpdates(): void;
  abstract loadUserProfile(): void;
  abstract loadUserSavings(): void;

  initializeGame(): void {
    console.log(`Initializing the game...`);
  }

  runGameMenu(): void {
    console.log(`Running the game menu...`);
  }
}

class GodOfWarLoader extends GameLoader {
  checkForUpdates(): void {
    console.log(`Check for 'God of War' updates... `);
  }

  downloadUpates(): void {
    console.log(`Downloading 'God of War' updates...`);
  }

  installUpdates(): void {
    console.log(`Installing 'God of War' updates...`);
  }

  loadUserProfile(): void {
    console.log(`Loading the user's profile...`);
  }

  loadUserSavings(): void {
    console.log(`Loading the user's savings...`);
  }
}

class LastOfUsLoader extends GameLoader {
  checkForUpdates(): void {
    console.log(`Check for 'Last Of Us' updates... `);
  }

  downloadUpates(): void {
    console.log(`Downloading 'Last Of Us' updates...`);
  }

  installUpdates(): void {
    console.log(`Installing 'Last Of Us' updates...`);
  }

  initializeGame(): void {
    console.log(`Initializing 'Last Of Us'...`);
  }

  loadUserProfile(): void {
    console.log(`Loading the user's profile...`);
  }

  loadUserSavings(): void {
    console.log(`Loading the user's savings...`);
  }
}

const godOfWarLoader: GameLoader = new GodOfWarLoader();
godOfWarLoader.run();

console.log();

const lastOfUsLoader: LastOfUsLoader = new LastOfUsLoader();
lastOfUsLoader.run();
