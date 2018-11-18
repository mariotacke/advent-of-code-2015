const assert = require('assert');

const medicine = require('./medicine');
const medicine2 = require('./medicine2');

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

  describe('Part Two', () => {
    it('should calculate steps to make HOH molecule', () => {
      const replacements =
        `e => H
         e => O
         H => HO
         H => OH
         O => HH`;
      const molecule = 'HOH';

      assert.strictEqual(medicine2(molecule, replacements), 3);
    });

    it('should calculate steps to make HOHOHO molecule', () => {
      const replacements =
        `e => H
         e => O
         H => HO
         H => OH
         O => HH`;
      const molecule = 'HOHOHO';

      assert.strictEqual(medicine2(molecule, replacements), 6);
    });
  });
});
