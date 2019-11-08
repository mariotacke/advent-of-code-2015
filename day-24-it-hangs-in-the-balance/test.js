const assert = require('assert');

const quantum = require('./quantum');
const quantum2 = require('./quantum2');

describe('Day 24: It Hangs in the Balance', () => {
  it('should calculate quantum entanglement', () => {
    const packages =
      `1
       2
       3
       4
       5
       7
       8
       9
       10
       11`;

    const entanglement = quantum(packages);

    assert.strictEqual(entanglement, 99);
  });

  describe('Part Two', () => {
    it('should calculate quantum entanglement with four compartments', () => {
      const packages =
        `1
         2
         3
         4
         5
         7
         8
         9
         10
         11`;

      const entanglement = quantum2(packages);

      assert.strictEqual(entanglement, 44);
    });
  });
});
