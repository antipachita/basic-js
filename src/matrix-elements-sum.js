const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let first = matrix[0].reduce((total, el) => {
    return total+el
  }, 0)
  let count = matrix.length;
  let length = matrix[0].length;
  let flatArr = matrix.flat();
  let result = 0;
    for (let i = 0; i<flatArr.length-length; i++) {
     if (flatArr[i]!=0) {
       
       result = result + flatArr[i+length];
     }
    }
  return first + result
}

module.exports = {
  getMatrixElementsSum
};
