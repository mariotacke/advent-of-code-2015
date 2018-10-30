const assert = require('assert');

const niceString = require('./nice-string');
const niceString2 = require('./nice-string2');

describe('Day 5: Doesn\'t He Have Intern - Elves For This?', () => {
  it('ugknbfddgicrmopn should be nice', () => {
    assert.equal(niceString('ugknbfddgicrmopn'), true);
  });

  it('aaa should be nice', () => {
    assert.equal(niceString('aaa'), true);
  });

  it('jchzalrnumimnmhp should be naughty', () => {
    assert.equal(niceString('jchzalrnumimnmhp'), false);
  });

  it('haegwjzuvuyypxyu should be naughty', () => {
    assert.equal(niceString('haegwjzuvuyypxyu'), false);
  });

  it('dvszwmarrgswjxmb should be naughty', () => {
    assert.equal(niceString('dvszwmarrgswjxmb'), false);
  });

  describe('Part Two', () => {
    it('qjhvhtzxzqqjkmpb should be nice', () => {
      assert.equal(niceString2('qjhvhtzxzqqjkmpb'), true);
    });

    it('xxyxx should be nice', () => {
      assert.equal(niceString2('xxyxx'), true);
    });

    it('uurcxstgmygtbstg should be naughty', () => {
      assert.equal(niceString2('uurcxstgmygtbstg'), false);
    });

    it('ieodomkazucvgmuy should be naughty', () => {
      assert.equal(niceString2('ieodomkazucvgmuy'), false);
    });
  });
});
