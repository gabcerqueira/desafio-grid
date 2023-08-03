const WAIT_CLEAR_NEXT_SQUARE = 1000;
const WAIT_INIT_CLEAR_GRID = 1500;

class MyStack {
  constructor() {
    this.items = [];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  push(element) {
    this.items.push(element);
  }

  pop() {
    if (this.isEmpty()) {
      return null;
    }
    return this.items.pop();
  }
}

const myStack = new MyStack();

function handleSelectedSquare(element) {
  element.classList.toggle("green-square");
  myStack.push(element);
  handleCheckFilledGreenSquares();
}

function clearGrid() {
  setTimeout(async () => {
    while (!myStack.isEmpty()) {
      const element = myStack.pop();

      element.classList.toggle("green-square");
      await wait(WAIT_CLEAR_NEXT_SQUARE);
    }
  }, WAIT_INIT_CLEAR_GRID);
}

function wait(ms) {
  return new Promise((resolve, _reject) => setTimeout(resolve, ms));
}

function handleCheckFilledGreenSquares() {
  const greenSquares = document.querySelectorAll(".green-square");

  if (greenSquares.length >= 7) {
    clearGrid();
  }
}
