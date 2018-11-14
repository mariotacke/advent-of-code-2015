const assert = require('assert');

const fluids = require('./fluids');

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
});
