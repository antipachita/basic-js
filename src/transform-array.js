const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
  let res = [];
  let copy = arr.slice();
  for (let i = 0; i < copy.length; i++) {
    if (copy[i] == '' || copy[i] ==  undefined) {
      i = i;
  } else if (copy[i] === '--discard-prev') {
    if (copy[i-1] !== undefined) {
     res.splice(res.length-1, 1);
    }
  } else if (copy[i] === '--discard-next') {
    delete copy[i+1];
  } else if (copy[i] === '--double-prev') {
    if (copy[i-1] == '' ||copy[i-1] !== undefined) {
      res.splice(res.length-1, 0,copy[i-1]);
    }
  } else if (copy[i] === '--double-next') {
    if (copy[i+1] == '' ||copy[i+1] !== undefined) {
      res.push(copy[i+1]);
    }
  } else {
    res.push(copy[i]);
  }
  }
  return res;
}

module.exports = {
  transform
};
