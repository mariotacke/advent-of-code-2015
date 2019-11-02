const assert = require('assert');

const infinite = require('./infinite');

describe('Day 20: Infinite Elves and Infinite Houses', () => {
  it('should calculate lowest house number', () => {
    assert.strictEqual(infinite(10), 1);
    assert.strictEqual(infinite(30), 2);
    assert.strictEqual(infinite(40), 3);
    assert.strictEqual(infinite(60), 4);
    assert.strictEqual(infinite(70), 4);
    assert.strictEqual(infinite(120), 6);
    assert.strictEqual(infinite(150), 8);
  });
});
