const assert = require('assert');

const reindeer = require('./reindeer');
const reindeer2 = require('./reindeer2');

describe('Day 14: Reindeer Olympics', () => {
  it('should calculate fastest reindeer', () => {
    const racers =
      `Comet can fly 14 km/s for 10 seconds, but then must rest for 127 seconds.
       Dancer can fly 16 km/s for 11 seconds, but then must rest for 162 seconds.`;

    assert.strictEqual(reindeer(racers, 1000), 1120);
  });

  describe('Part Two', () => {
    it('should calculate highest score reindeer', () => {
      const racers =
        `Comet can fly 14 km/s for 10 seconds, but then must rest for 127 seconds.
         Dancer can fly 16 km/s for 11 seconds, but then must rest for 162 seconds.`;

      assert.strictEqual(reindeer2(racers, 1000), 689);
    });
  });
});
