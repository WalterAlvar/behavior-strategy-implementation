'use strict';

/**
 * reverses a string
 * @param {string} [toReverse=''] - the string to reverse
 * @returns {string} the reversed argument
 */
const stub = () => {};

/*
  your strategy goes here
*/

for (const solution of [
  secretSolution,
  // stub
]) {
  // the main test suite for the function
  describe(solution.name + ': reverses a string', () => {
    it('default parameter is an empty string -> ""', () => {
      expect(solution()).toEqual('');
    });
    it('an empty string -> ""', () => {
      expect(solution('')).toEqual('');
    });
    it('a string with all capital letters', () => {
      expect(solution('ASDF')).toEqual('FDSA');
    });
    // write at least 5 more tests ...
    it('a string with special characters', () => {
      expect(solution('ASDF/')).toEqual('/FDSA');
    });
    it('a string with a number in it', () => {
      expect(solution('asdf1')).toEqual('1fdsa');
    });
  });
}

// minified solution for testing your tests
// prettier-ignore
function secretSolution(a = '') { if ("string" != typeof a) throw new TypeError("toReverse is not a string"); return a.split("").reverse().join("") }
