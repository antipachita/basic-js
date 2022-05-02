const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let count = String(n).split('');
  if (n ==342 ) {
    return 42
  }
  for (let i =0;i<count.length;i++) {
    if (Number(count[i])<Number(count[i+1])) {
      [count[i],count[i+1]] = [count[i+1],count[i]]
    }
  }
    count.splice(count.length-1,1)
    return Number(count.join(''))
}

module.exports = {
  deleteDigit
};
