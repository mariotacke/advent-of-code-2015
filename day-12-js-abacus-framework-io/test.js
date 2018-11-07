const assert = require('assert');

const abacus = require('./abacus');

describe('Day 12: JSAbacusFramework.io', () => {
  it('should calculate total number', () => {
    assert.strictEqual(abacus([1, 2, 3]), 6);
    assert.strictEqual(abacus({ 'a': 2, 'b': 4 }), 6);
    assert.strictEqual(abacus([[[3]]]), 3);
    assert.strictEqual(abacus({ 'a': { 'b': 4 }, 'c': -1 }), 3);
    assert.strictEqual(abacus({ 'a': [-1, 1] }), 0);
    assert.strictEqual(abacus([-1, { 'a': 1 }]), 0);
    assert.strictEqual(abacus([]), 0);
    assert.strictEqual(abacus({}), 0);
  });
});
