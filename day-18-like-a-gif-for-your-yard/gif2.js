class Grid {
  constructor (input) {
    this._state = input
      .split('\n')
      .map((x) => x
        .trim()
        .split('')
        .map((l) => l === '#')
      );
  }

  getLight (x, y) {
    return (this._state[y] || [])[x] || false;
  }

  getTurnedOnLights () {
    return this._state.reduce((accumulator, currentValue) => {
      return accumulator + currentValue.filter((x) => x).length;
    }, 0);
  }

  _nextLightState (x, y) {
    const getLight = this.getLight.bind(this);

    if ((x === 0 && y === 0) ||
        (x === 0 && y === this._state.length - 1) ||
        (x === this._state[0].length - 1 && y === 0) ||
        (x === this._state[0].length - 1 && y === this._state.length - 1)) {
      return true;
    }

    const currentState = getLight(x, y);
    const onNeighbors = [
      getLight(x - 1, y - 1), getLight(x, y - 1), getLight(x + 1, y - 1),
      getLight(x - 1, y),                         getLight(x + 1, y),
      getLight(x - 1, y + 1), getLight(x, y + 1), getLight(x + 1, y + 1),
    ].filter((l) => l).length;

    return currentState
      ? onNeighbors >= 2 && onNeighbors <= 3
      : onNeighbors === 3;
  }

  tick () {
    const nextState = [];

    for (let y = 0; y < this._state.length; y++) {
      const row = [];

      for (let x = 0; x < this._state[0].length; x++) {
        const light = this._nextLightState(x, y);

        row.push(light);
      }

      nextState.push(row);
    }

    this._state = nextState;
  }

  print () {
    return this._state
      .map((row) => row
        .map((col) => col ? '#' : '.')
        .join(''))
      .join('\n');
  }
}

const gif = (input, steps) => {
  const grid = new Grid(input);

  for (let i = 0; i < steps; i++) {
    grid.tick();
  }

  return grid.getTurnedOnLights();
};

module.exports = gif;
