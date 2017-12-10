const assert = require('assert');

const directions = require('./directions');
const directions2 = require('./directions2');

describe('Day 3: Perfectly Spherical Houses in a Vacuum', () => {
  it('should properly calculate >', () => {
    assert.equal(directions('>'), 2);
  });

  it('should properly calculate ^>v<', () => {
    assert.equal(directions('^>v<'), 4);
  });

  it('should properly calculate ^v^v^v^v^v', () => {
    assert.equal(directions('^v^v^v^v^v'), 2);
  });

  describe('Part Two', () => {
    it('should properly calculate ^v', () => {
      assert.equal(directions2('^v'), 3);
    });

    it('should properly calculate ^>v<', () => {
      assert.equal(directions2('^>v<'), 3);
    });

    it('should properly calculate ^v^v^v^v^v', () => {
      assert.equal(directions2('^v^v^v^v^v'), 11);
    });
  });
});
