const assert = require('assert');

const directions = require('./directions');

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
});
