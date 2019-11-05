const assert = require('assert');

const turing = require('./turing');

describe('Day 23: Opening the Turing Lock', () => {
  it('should determine value in register b', () => {
    const instructions =
      `inc a
       jio a, +2
       tpl a
       inc a`;

    const registers = turing(instructions);

    assert.strictEqual(registers.a, 2);
  });
});
