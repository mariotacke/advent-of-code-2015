const assert = require('assert');

const medicine = require('./medicine');

describe('Day 19: Medicine for Rudolph', () => {
  it('should calculate distinct HOH molecules', () => {
    const replacements =
      `H => HO
       H => OH
       O => HH`;
    const molecule = 'HOH';

    assert.strictEqual(medicine(molecule, replacements), 4);
  });

  it('should calculate distinct HOHOHO molecules', () => {
    const replacements =
      `H => HO
       H => OH
       O => HH`;
    const molecule = 'HOHOHO';

    assert.strictEqual(medicine(molecule, replacements), 7);
  });
});
