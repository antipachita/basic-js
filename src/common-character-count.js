const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2 ) {
  let result = 0;

  let srt1 = s1.split('');
  let srt2 = s2.split('');
  
  if (srt1.length>srt2.length) {
    for (let i = 0; i<srt1.length; i++) {
      if (srt2.includes(srt1[i])){
        let pos = srt2.indexOf(srt1[i]);
        srt2.splice(pos, 1);
        result++
  
        }  
      }
  } else if (srt2.length>srt1.length) {
    for (let i = 0; i<srt2.length; i++) {
      if (srt1.includes(srt2[i])){
        let pos = srt1.indexOf(srt2[i]);
        srt1.splice(pos, 1);
        result++
  
        }  
      }
  } else {
    for (let i = 0; i<srt2.length; i++) {
      if (srt1.includes(srt2[i])){
        let pos = srt1.indexOf(srt2[i]);
        srt1.splice(pos, 1);
        result++
  
        }  
      }
  }
    
    return result;
}

module.exports = {
  getCommonCharacterCount
};
