const assert = require('assert');

const notQuiteLisp = require('./not-quite-lisp');

describe('Day 1: Not Quite Lisp', () => {
  it('should properly calculate (()) and ()()', () => {
    assert.equal(0, notQuiteLisp('(())'));
    assert.equal(0, notQuiteLisp('()()'));
  });
  
  it('should properly calculate ((( and (()(()(', () => {    
    assert.equal(3, notQuiteLisp('((('));
    assert.equal(3, notQuiteLisp('(()(()('));
  });
  
  it('should properly calculate ))(((((', () => {    
    assert.equal(3, notQuiteLisp('))((((('));
  });
  
  it('should properly calculate ()) and ))(', () => {    
    assert.equal(-1, notQuiteLisp('())'));
    assert.equal(-1, notQuiteLisp('))('));
  });
  
  it('should properly calculate ))) and )())())', () => {    
    assert.equal(-3, notQuiteLisp(')))'));
    assert.equal(-3, notQuiteLisp(')())())'));
  });
});