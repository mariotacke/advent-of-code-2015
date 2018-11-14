const assert = require('assert');

const fluids = require('./fluids');
const fluids2 = require('./fluids2');

describe('Day 17: No Such Thing as Too Much', () => {
  it('should calculate possible combinations', () => {
    const containers =
      `20
       15
       10
       5
       5`;

    assert.strictEqual(fluids(25, containers), 4);
  });

  describe('Part Two', () => {
    it('should calculate minimum possible combinations', () => {
      const containers =
        `20
         15
         10
         5
         5`;

      assert.strictEqual(fluids2(25, containers), 3);
    });
  });
});
