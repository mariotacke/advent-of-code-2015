const assert = require('assert');

const infinite = require('./infinite');
const infinite2 = require('./infinite2');

describe('Day 20: Infinite Elves and Infinite Houses', () => {
  it('should calculate lowest house number', () => {
    assert.strictEqual(infinite(10), 1);
    assert.strictEqual(infinite(30), 2);
    assert.strictEqual(infinite(40), 3);
    assert.strictEqual(infinite(60), 4);
    assert.strictEqual(infinite(70), 4);
    assert.strictEqual(infinite(120), 6);
    assert.strictEqual(infinite(150), 8);
    assert.strictEqual(infinite(100000), 3120);
  });

  describe('Part Two', () => {
    it('should calculate lowest house number without infinite deliveries', () => {
      assert.strictEqual(infinite2(10), 1);
      assert.strictEqual(infinite2(100), 6);
      assert.strictEqual(infinite2(1000), 36);
      assert.strictEqual(infinite2(10000), 336);
      assert.strictEqual(infinite2(100000), 2880);
    });
  });
});
