const assert = require('assert');

const quantum = require('./quantum');

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
});
