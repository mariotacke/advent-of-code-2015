const assert = require('assert');

const assembly = require('./assembly');

describe('Day 7: Some Assembly Required', () => {
  it('should calculate circuit signals', () => {
    const instructions =
     `123 -> x
      456 -> y
      x AND y -> d
      x OR y -> e
      x LSHIFT 2 -> f
      y RSHIFT 2 -> g
      NOT x -> h
      NOT y -> i`;

    const signals = assembly(instructions);

    assert.equal(signals['d'], 72);
    assert.equal(signals['e'], 507);
    assert.equal(signals['f'], 492);
    assert.equal(signals['g'], 114);
    assert.equal(signals['h'], 65412);
    assert.equal(signals['i'], 65079);
    assert.equal(signals['x'], 123);
    assert.equal(signals['y'], 456);
  });
});
