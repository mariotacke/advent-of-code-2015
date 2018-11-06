const assert = require('assert');

const lookAndSay = require('./look-and-say');

describe('Day 10: Elves Look, Elves Say', () => {
  it('should look and say', () => {
    assert.strictEqual(lookAndSay('1'), '11');
    assert.strictEqual(lookAndSay('11'), '21');
    assert.strictEqual(lookAndSay('21'), '1211');
    assert.strictEqual(lookAndSay('1211'), '111221');
    assert.strictEqual(lookAndSay('111221'), '312211');
  });
});
