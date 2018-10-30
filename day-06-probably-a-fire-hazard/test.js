const assert = require('assert');

const fireHazard = require('./fire-hazard');
const fireHazard2 = require('./fire-hazard2');

describe('Day 6: Probably a Fire Hazard', () => {
  it('should turn on every light', () => {
    assert.equal(fireHazard('turn on 0,0 through 999,999'), 1000000);
  });

  it('should toggle first line', () => {
    assert.equal(fireHazard('toggle 0,0 through 999,0'), 1000);
  });

  it('should turn off 2x2 center lights', () => {
    assert.equal(fireHazard('turn off 499,499 through 500,500'), 0);
  });

  describe('Part Two', () => {
    it('should increase brightness by 1', () => {
      assert.equal(fireHazard2('turn on 0,0 through 0,0'), 1);
    });

    it('should toggle first line', () => {
      assert.equal(fireHazard2('toggle 0,0 through 999,999'), 2000000);
    });
  });
});
