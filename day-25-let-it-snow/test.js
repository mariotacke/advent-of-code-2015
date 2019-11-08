const assert = require('assert');

const snow = require('./snow');

const formatInput = (row, column) =>
  'To continue, please consult the code grid in the manual.  ' +
  `Enter the code at row ${row}, column ${column}.`;

describe('Day 25: Let It Snow', () => {
  it('should calculate code at position 2,1', () => {
    const code = snow(formatInput(2, 1));

    assert.strictEqual(code, 31916031);
  });

  it('should calculate code at position 1,2', () => {
    const code = snow(formatInput(1, 2));

    assert.strictEqual(code, 18749137);
  });

  it('should calculate code at position 3,1', () => {
    const code = snow(formatInput(3, 1));

    assert.strictEqual(code, 16080970);
  });

  it('should calculate code at position 3,4', () => {
    const code = snow(formatInput(3, 4));

    assert.strictEqual(code, 7981243);
  });

  it('should calculate code at position 6,6', () => {
    const code = snow(formatInput(6, 6));

    assert.strictEqual(code, 27995004);
  });
});
