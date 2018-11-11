const assert = require('assert');

const cookie = require('./cookie');
const cookie2 = require('./cookie2');

describe('Day 15: Science for Hungry People', () => {
  it('should calculate highest scoring cookie', () => {
    const ingredients =
      `Butterscotch: capacity -1, durability -2, flavor 6, texture 3, calories 8
       Cinnamon: capacity 2, durability 3, flavor -2, texture -1, calories 3`;

    assert.strictEqual(cookie(ingredients), 62842880);
  });

  describe('Part Two', () => {
    it('should calculate highest scoring 500 calorie cookie', () => {
      const ingredients =
        `Butterscotch: capacity -1, durability -2, flavor 6, texture 3, calories 8
         Cinnamon: capacity 2, durability 3, flavor -2, texture -1, calories 3`;

      assert.strictEqual(cookie2(ingredients), 57600000);
    });
  });
});
