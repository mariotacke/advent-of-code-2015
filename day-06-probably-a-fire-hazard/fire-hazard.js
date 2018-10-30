class Grid {
  constructor (x, y) {
    this._x = x;
    this._y = y;
    this._matrix = [];

    for (let r = 0; r < y; r++) {
      const row = [];

      for (let c = 0; c < x; c++) {
        row.push(false);
      }

      this._matrix.push(row);
    }
  }

  _mutateRange (x1, y1, x2, y2, fn) {
    for (let r = y1; r <= y2; r++) {
      for (let c = x1; c <= x2; c++) {
        this._matrix[r][c] = fn(this._matrix[r][c]);
      }
    }
  }

  execute (command, x1, y1, x2, y2) {
    switch (command) {
      case 'turn on':
        return this.turnOn(x1, y1, x2, y2);
      case 'toggle':
        return this.toggle(x1, y1, x2, y2);
      case 'turn off':
        return this.turnOff(x1, y1, x2, y2);
      default:
        break;
    }
  }

  turnOn (x1, y1, x2, y2) {
    this._mutateRange(x1, y1, x2, y2, () => true);
  }

  toggle (x1, y1, x2, y2) {
    this._mutateRange(x1, y1, x2, y2, (state) => !state);
  }

  turnOff (x1, y1, x2, y2) {
    this._mutateRange(x1, y1, x2, y2, () => false);
  }

  get turnedOn () {
    let numberOfTurnedOnLights = 0;

    for (let r = 0; r < this._y; r++) {
      for (let c = 0; c < this._x; c++) {
        if (this._matrix[r][c]) {
          numberOfTurnedOnLights++;
        }
      }
    }

    return numberOfTurnedOnLights;
  }
}

const setupLights = (input, x = 1000, y = 1000) => {
  const grid = new Grid(x, y);

  input
    .split('\n')
    .map((instruction) => instruction.trim())
    .forEach((instruction) => {
      const parts = instruction.match(/(.*)\s(\d+),(\d+)\sthrough\s(\d+),(\d+)/);
      const command = parts[1];
      const x1 = parseInt(parts[2]);
      const y1 = parseInt(parts[3]);
      const x2 = parseInt(parts[4]);
      const y2 = parseInt(parts[5]);

      grid.execute(command, x1, y1, x2, y2);
    });

  return grid.turnedOn;
};

module.exports = setupLights;
