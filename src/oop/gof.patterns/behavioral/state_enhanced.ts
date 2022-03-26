export {};

// https://refactoring.guru/design-patterns/state
// https://www.youtube.com/watch?v=abX4xzaAsoc

// https://www.baeldung.com/java-state-design-pattern // one more implementation

class AudioPlayer {
  private _state: State;

  constructor() {
    // Here the first time player is passed to state
    this._state = new LockedState(this);
  }

  setState(state: State): void {
    this._state = state;
  }

  clickLock(): void {
    this._state.clickLock();
  }

  clickPlay(): void {
    this._state.clickPlay();
  }

  clickNext(): void {
    this._state.clickNext();
  }

  clickPrevious(): void {
    this._state.clickPrevious();
  }

  play(): void {
    console.log('Player is now playing...');
  }

  pause(): void {
    console.log('Player is now paused');
  }

  nextSong(): void {
    console.log('Switched to next song');
  }

  previousSong(): void {
    console.log('Switched to previous song');
  }
}

abstract class State {
  // Each State instance will have own property player
  protected player: AudioPlayer;

  constructor(player: AudioPlayer) {
    this.player = player;
  }

  abstract clickLock(): void;
  abstract clickPlay(): void;
  abstract clickNext(): void;
  abstract clickPrevious(): void;
}

class LockedState extends State {
  // super constructor is called implicitly!!!
  // constructor(player: AudioPlayer) {
  //   super(player);
  // }

  clickLock(): void {
    // In this implementation, state can change state
    this.player.setState(new ReadyState(this.player));
    console.log('Player is now in Ready State');
  }

  clickPlay(): void {
    console.log('Nothing happend');
  }

  clickNext(): void {
    console.log('Nothing happend');
  }

  clickPrevious(): void {
    console.log('Nothing happend');
  }
}

class ReadyState extends State {
  clickLock(): void {
    this.player.setState(new LockedState(this.player));
    console.log('Player is now in Locked State');
  }

  clickPlay(): void {
    this.player.play();
    this.player.setState(new PlayingState(this.player));
    console.log('Player is now in Playing State');
  }

  clickNext(): void {
    this.player.nextSong();
  }

  clickPrevious(): void {
    this.player.previousSong();
  }
}

class PlayingState extends State {
  clickLock(): void {
    this.player.setState(new LockedState(this.player));
    console.log('Player is now in Locked State');
  }

  clickPlay(): void {
    this.player.pause();
    this.player.setState(new ReadyState(this.player));
    console.log('Player is now in Ready State');
  }

  clickNext(): void {
    this.player.nextSong();
  }

  clickPrevious(): void {
    this.player.previousSong();
  }
}

// Locked State by default
const player: AudioPlayer = new AudioPlayer();

player.clickLock();

player.clickPlay();

player.clickNext();

player.clickNext();

player.clickLock();

player.clickNext();

player.clickLock();

player.clickLock();

player.clickPlay();
