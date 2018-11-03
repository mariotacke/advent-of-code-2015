const assert = require('assert');

const matchsticks = require('./matchsticks');
const matchsticks2 = require('./matchsticks2');

describe('Day 8: Matchsticks', () => {
  it('should calculate empty strings', () => {
    const string = String.raw`""`;
    const total = matchsticks(string);

    assert.strictEqual(total, 2);
  });

  it('should calculate strings', () => {
    const string = String.raw`"abc"`;
    const total = matchsticks(string);

    assert.strictEqual(total, 2);
  });

  it('should calculate escaped characters', () => {
    const string = String.raw`"aaa\"aaa"`;
    const total = matchsticks(string);

    assert.strictEqual(total, 3);
  });

  it('should calculate escaped hexadecimal characters', () => {
    const string = String.raw`"\x27"`;
    const total = matchsticks(string);

    assert.strictEqual(total, 5);
  });

  describe('Part Two', () => {
    it('should calculate empty strings', () => {
      const string = String.raw`""`;
      const total = matchsticks2(string);

      assert.strictEqual(total, 4);
    });

    it('should calculate strings', () => {
      const string = String.raw`"abc"`;
      const total = matchsticks2(string);

      assert.strictEqual(total, 4);
    });

    it('should calculate escaped characters', () => {
      const string = String.raw`"aaa\"aaa"`;
      const total = matchsticks2(string);

      assert.strictEqual(total, 6);
    });

    it('should calculate escaped hexadecimal characters', () => {
      const string = String.raw`"\x27"`;
      const total = matchsticks2(string);

      assert.strictEqual(total, 5);
    });
  });
});
