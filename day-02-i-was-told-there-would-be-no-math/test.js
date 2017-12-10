const assert = require('assert');

const wrappingPaper = require('./wrapping-paper');
const ribbon = require('./ribbon');

describe('Day 2: I Was Told There Would Be No Math', () => {
  it('should properly calculate 2x3x4', () => {
    assert.equal(58, wrappingPaper('2x3x4'));
  });

  it('should properly calculate 1x1x10', () => {
    assert.equal(43, wrappingPaper('1x1x10'));
  });

  describe('Part Two', () => {
    it('should properly calculate 2x3x4', () => {
      assert.equal(34, ribbon('2x3x4'));
    });

    it('should properly calculate 1x1x10', () => {
      assert.equal(14, ribbon('1x1x10'));
    });
  });
});
