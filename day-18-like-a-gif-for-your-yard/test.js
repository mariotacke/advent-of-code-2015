const assert = require('assert');

const gif = require('./gif');

describe('Day 18: Like a GIF For Your Yard', () => {
  it('should calculate final state lights', () => {
    const grid =
      `.#.#.#
       ...##.
       #....#
       ..#...
       #.#..#
       ####..`;
    const steps = 4;

    assert.strictEqual(gif(grid, steps), 4);
  });
});
