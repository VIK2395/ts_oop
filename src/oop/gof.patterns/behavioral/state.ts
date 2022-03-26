export {};

// https://www.youtube.com/watch?v=NU_1StN5Tkk&t=2498s
// https://www.tutorialspoint.com/design_pattern/state_pattern.htm
// https://www.baeldung.com/java-state-design-pattern

// allows an object to behave differently when its state changes;
// open-closed prinsiple implemented // mosh;

interface ITool {
  mouseDown: () => void;
  mouseUp: () => void;
  nextTool: (canvas: Canvas) => void;
  prevTool: (canvas: Canvas) => void;
}

class SelectionTool implements ITool {
  // @Override
  mouseDown(): void {
    console.log('Selection icon');
  }
  // Override
  mouseUp(): void {
    console.log('Draw a dashed rectangle');
  }

  // Override
  nextTool(canvas: Canvas): void {
    canvas.setTool(new BrushTool());
  }

  // Override
  prevTool(): void {
    console.log('This is first tool in the list');
  }
}

class BrushTool implements ITool {
  // @Override
  mouseDown(): void {
    console.log('Brush icon');
  }
  // Override
  mouseUp(): void {
    console.log('Draw a line');
  }

  // Override
  nextTool(canvas: Canvas): void {
    canvas.setTool(new EraserTool());
  }

  // Override
  prevTool(canvas: Canvas): void {
    canvas.setTool(new SelectionTool());
  }
}

class EraserTool implements ITool {
  // @Override
  mouseDown(): void {
    console.log('Eraser icon');
  }
  // Override
  mouseUp(): void {
    console.log('Erase something');
  }

  // Override
  nextTool(): void {
    console.log('This is last tool in the list');
  }

  // Override
  prevTool(canvas: Canvas): void {
    canvas.setTool(new BrushTool());
  }
}

class Canvas {
  private tool: ITool;

  setTool(tool: ITool): void {
    this.tool = tool;
  }

  getTool(): ITool {
    return this.tool;
  }

  mouseDown(): void {
    this.tool.mouseDown();
  }

  mouseUp(): void {
    this.tool.mouseUp();
  }

  nextTool(): void {
    this.tool.nextTool(this); // this refs to obj instance, not class
  }

  prevTool(): void {
    this.tool.prevTool(this);
  }
}

const canvas: Canvas = new Canvas();

const selectionTool: SelectionTool = new SelectionTool();
const brushTool: BrushTool = new BrushTool();

canvas.setTool(selectionTool);
canvas.mouseDown();
canvas.mouseUp();
canvas.nextTool();
canvas.nextTool();
canvas.nextTool();
console.log(canvas.getTool());

canvas.setTool(brushTool);
canvas.mouseDown();
canvas.mouseUp();
canvas.prevTool();
canvas.prevTool();
console.log(canvas.getTool());
