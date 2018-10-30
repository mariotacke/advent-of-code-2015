const assert = require('assert');

const niceString = require('./nice-string');

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
});
