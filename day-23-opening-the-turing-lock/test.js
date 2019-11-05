const assert = require('assert');

const turing = require('./turing');

describe('Day 23: Opening the Turing Lock', () => {
  it('should determine value in registers', () => {
    const instructions =
      `inc a
       jio a, +2
       tpl a
       inc a`;

    const registers = turing(instructions);

    assert.strictEqual(registers.a, 2);
    assert.strictEqual(registers.b, 0);
  });

  describe('Part Two', () => {
    it('should determine value in registers when a is one at start', () => {
      const instructions =
        `inc a
         jio a, +2
         tpl a
         inc a`;

      const registers = turing(instructions, 1);

      assert.strictEqual(registers.a, 7);
      assert.strictEqual(registers.b, 0);
    });
  });
});
