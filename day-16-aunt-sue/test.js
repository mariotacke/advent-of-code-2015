const assert = require('assert');

const aunties = require('./aunties');

describe('Day 16: Aunt Sue', () => {
  it('should detect aunt', () => {
    const aunts =
      `Sue 1: goldfish: 6, trees: 9, akitas: 0
       Sue 2: goldfish: 7, trees: 1, akitas: 0
       Sue 3: cars: 10, akitas: 6, perfumes: 7
       Sue 4: perfumes: 2, vizslas: 0, cars: 6
       Sue 5: goldfish: 1, trees: 3, perfumes: 10
       Sue 6: children: 9, vizslas: 7, cars: 9
       Sue 7: cars: 6, vizslas: 5, cats: 3
       Sue 8: akitas: 10, vizslas: 9, children: 3
       Sue 9: vizslas: 8, cats: 2, trees: 1
       Sue 10: perfumes: 10, trees: 6, cars: 4`;

    const giftCompounds =
      `children: 3
       cats: 7
       samoyeds: 2
       pomeranians: 3
       akitas: 0
       vizslas: 0
       goldfish: 1
       trees: 3
       cars: 2
       perfumes: 10`;

    assert.strictEqual(aunties(aunts, giftCompounds), 5);
  });
});
