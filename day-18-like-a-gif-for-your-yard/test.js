const assert = require('assert');

const gif = require('./gif');
const gif2 = require('./gif2');

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

  describe('Part Two', () => {
    it('should consider stuck lights', () => {
      const grid =
        `##.#.#
         ...##.
         #....#
         ..#...
         #.#..#
         ####.#`;
      const steps = 5;

      assert.strictEqual(gif2(grid, steps), 17);
    });
  });
});
