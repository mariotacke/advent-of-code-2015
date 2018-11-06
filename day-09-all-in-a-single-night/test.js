const assert = require('assert');

const distance = require('./shortest-distance');
const distance2 = require('./shortest-distance2');

describe('Day 9: All in a Single Night', () => {
  it('should calculate shortest distance', () => {
    const distances =
     `London to Dublin = 464
      London to Belfast = 518
      Dublin to Belfast = 141`;

    const shortest = distance(distances);

    assert.strictEqual(shortest, 605);
  });

  describe('Part Two', () => {
    it('should calculate longest distance', () => {
      const distances =
        `London to Dublin = 464
         London to Belfast = 518
         Dublin to Belfast = 141`;

      const shortest = distance2(distances);

      assert.strictEqual(shortest, 982);
    });
  });
});
