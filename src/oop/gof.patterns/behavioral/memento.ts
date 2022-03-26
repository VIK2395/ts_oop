export {};

// https://www.youtube.com/watch?v=_Q5rXfGuyLQ&list=PLlsmxlJgn1HJpa28yHzkBmUY-Ty71ZUGc&index=11
// https://refactoring.guru/design-patterns/memento
// https://www.tutorialspoint.com/design_pattern/memento_pattern.htm
// https://www.youtube.com/watch?v=NU_1StN5Tkk&t=2498s
// http://www.avajava.com/tutorials/lessons/memento-pattern.html

// знімок
// keep track of state history to do undo

// Originator
class Editor {
  constructor(
    private text: string = '',
    private curX: number = 0,
    private curY: number = 0,
    private selectionWidth: number = null,
    // field not saved to Memento
    private author: string = 'unknown',
  ) {}

  setText(text: string): void {
    this.text = text;
  }

  setCursor(x: number, y: number): void {
    this.curX = x;
    this.curY = y;
  }

  setSelectionWidth(width: number): void {
    this.selectionWidth = width;
  }

  // save to Memento
  makeSnapshot(): Snapshot {
    return new Snapshot(this.text, this.curX, this.curY, this.selectionWidth);
  }

  restore(snapShot: Snapshot) {
    // to avoid this, builder pattern can be implemented here
    this.text = snapShot.text;
    this.curX = snapShot.curX;
    this.curY = snapShot.curY;
    this.selectionWidth = snapShot.selectionWidth;
  }

  getData(): Editor {
    return this;
  }
}

// Memento
class Snapshot {
  constructor(
    readonly text: string,
    readonly curX: number,
    readonly curY: number,
    readonly selectionWidth: number,
  ) {}
}

// Caretaker
class Command {
  private snapShotHistory: Array<Snapshot> = [];
  private editor: Editor;

  constructor(editor: Editor) {
    this.editor = editor;
  }

  setText(text: string): void {
    this.editor.setText(text);
    this.snapShotHistory.push(this.editor.makeSnapshot());
  }

  setCursor(x: number, y: number): void {
    this.editor.setCursor(x, y);
    this.snapShotHistory.push(this.editor.makeSnapshot());
  }

  setSelectionWidth(width: number): void {
    this.editor.setSelectionWidth(width);
    this.snapShotHistory.push(this.editor.makeSnapshot());
  }

  undo(): void {
    this.editor.restore(this.snapShotHistory.pop());
  }
}

const editor: Editor = new Editor();
const command: Command = new Command(editor);

// 0
console.log(editor.getData());

// 1
command.setCursor(0, 0);
console.log(editor.getData());

// 2
command.setText('Hello world!');
console.log(editor.getData());

// 3
command.setSelectionWidth(12);
console.log(editor.getData());

// changes without save
editor.setText('sdfsdfbhbsh');
console.log(editor.getData());

console.log();

// 3
command.undo();
console.log(editor.getData());

// 2
command.undo();
console.log(editor.getData());

// 1
command.undo();
console.log(editor.getData());
