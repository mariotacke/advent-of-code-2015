const assert = require('assert');

const stockingStuffer = require('./stocking-stuffer');

// tests are skipped because they can be very resource intensive
describe('Day 4: The Ideal Stocking Stuffer', function () {
  this.timeout(10000);

  it('should properly calculate abcdef', () => {
    assert.equal(stockingStuffer('abcdef'), 609043);
  });

  it('should properly calculate pqrstuv', () => {
    assert.equal(stockingStuffer('pqrstuv'), 1048970);
  });
});
