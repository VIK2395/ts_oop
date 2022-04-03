export {};

// https://www.youtube.com/watch?v=bTiAfLbmsnY
// https://www.youtube.com/watch?v=88kAIisOiYs&list=PLlsmxlJgn1HJpa28yHzkBmUY-Ty71ZUGc&index=18
// https://refactoring.guru/design-patterns/bridge

// Escape creating each dimension class combination by extracting one of the dimension
// into separate class hierarchy and injecting it in abstract layer.

// Problem with inheritance: extending a class in two or more independent dimensions
// lead to number of class combinations to grow in geometric progression.
// Solution: switch from inheritance to composition.
// Extract one of the dimensions into a separate class hierarchy.

// *Note that we’re not talking about interfaces or abstract classes from your programming language.
// These aren’t the same things.

// We can have different brand controles and different devices to be controlled => Many combinations.

// Implementation layer => Declares an interface for concrete implementations.
interface IDevice {
  isEnabled(): boolean;
  enable(): void;
  disable(): void;
  getVolume(): number;
  setVolume(percent: number): void;
  getChannel(): number;
  setChannel(channel: number): void;
}

// Concrete implementation
class Tv implements IDevice {
  constructor(
    private enabled: boolean = false,
    private volume: number = 10,
    private channel: number = 1,
  ) {}

  isEnabled(): boolean {
    return this.enabled;
  }

  enable(): void {
    this.enabled = true;
  }

  disable(): void {
    this.enabled = false;
  }

  getVolume(): number {
    return this.volume;
  }

  setVolume(percent: number): void {
    this.volume = percent;
  }

  getChannel(): number {
    return this.channel;
  }

  setChannel(channel: number): void {
    this.channel = channel;
  }
}

// *Abstraction layer => Provides high-level control logic.
// Wrapps a concrete implementation.
// Delegates all work to the concrete implementation.
class RemoteControl {
  // This link device reference is a bridge between abstraction (controls) and implementation (devices).
  protected device: IDevice;

  constructor(device: IDevice) {
    this.device = device;
  }

  togglePower() {
    if (this.device.isEnabled()) {
      this.device.disable();
    } else {
      this.device.enable();
    }
  }

  volumeUp() {
    this.device.setVolume(this.device.getVolume() + 10);
  }

  volumeDown() {
    this.device.setVolume(this.device.getVolume() - 10);
  }

  channelUp() {
    this.device.setChannel(this.device.getChannel() + 1);
  }

  channelDown() {
    this.device.setChannel(this.device.getChannel() - 1);
  }
}

// Refined Abstraction
class AdvancedRemoteControl extends RemoteControl {
  mute(): void {
    this.device.setVolume(0);
  }
}

const tv: Tv = new Tv();
const remote: RemoteControl = new RemoteControl(tv);

console.log(tv);
console.log();

remote.togglePower();
console.log(tv);
remote.volumeUp();
console.log(tv);
remote.volumeUp();
console.log(tv);
