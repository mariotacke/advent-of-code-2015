const assert = require('assert');

const notQuiteLisp = require('./not-quite-lisp');
const notQuiteLisp2 = require('./not-quite-lisp2');

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
  
  describe('Part 2', () => {
    it('should properly calculate )', () => {
      assert.equal(1, notQuiteLisp2(')'));
    });
    
    it('should properly calculate ()())', () => {
      assert.equal(5, notQuiteLisp2('()())'));
    });
  });
});