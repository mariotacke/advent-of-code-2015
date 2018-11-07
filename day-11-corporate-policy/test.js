const assert = require('assert');

const {
  hasIncreasingStraight,
  hasForbiddenCharacters,
  hasNonOverlappingPairs,
  incrementPassword,
  passwordGenerator
} = require('./password');

describe('Day 11: Corporate Policy', () => {
  it('should have increasing straight', () => {
    assert.strictEqual(hasIncreasingStraight('hijklmmn'), true);
    assert.strictEqual(hasIncreasingStraight('abbceffg'), false);
    assert.strictEqual(hasIncreasingStraight('abbcegjk'), false);
  });

  it('should have not have i, o, l letters', () => {
    assert.strictEqual(hasForbiddenCharacters('hijklmmn'), true);
    assert.strictEqual(hasForbiddenCharacters('abbceffg'), false);
    assert.strictEqual(hasForbiddenCharacters('abbcegjk'), false);
  });

  it('should have non-overlapping pairs', () => {
    assert.strictEqual(hasNonOverlappingPairs('hijklmmn'), false);
    assert.strictEqual(hasNonOverlappingPairs('abbceffg'), true);
    assert.strictEqual(hasNonOverlappingPairs('abbcegjk'), false);
  });

  it('should increment password', () => {
    assert.strictEqual(incrementPassword('xx'), 'xy');
    assert.strictEqual(incrementPassword('xy'), 'xz');
    assert.strictEqual(incrementPassword('xz'), 'ya');
    assert.strictEqual(incrementPassword('ya'), 'yb');
  });

  it('should generate next valid password', () => {
    assert.strictEqual(passwordGenerator('abcdefgh'), 'abcdffaa');
    assert.strictEqual(passwordGenerator('ghijklmn'), 'ghjaabcc');
  });
});
