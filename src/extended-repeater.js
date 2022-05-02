const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let result = [];
  let additionWithTabs = [];
  let additionWithsep = '';
  for (let i = 0; i < options.additionRepeatTimes; i++) {
    additionWithTabs.push(String(options.addition));
  }

  if (options.additionSeparator) {
    additionWithsep = additionWithTabs.join(options.additionSeparator)
  } else if (!options.additionSeparator) {
    additionWithsep = additionWithTabs.join('|')
  }
  

  if (additionWithTabs.length != 0) {
    for (let i = 0; i < options.repeatTimes; i++) {
      result.push(String(str) + additionWithsep);
    }
  } else {
    if (!options.repeatTimes) {
      result.push(String(str) + String(options.addition));
    } else if (options.repeatTimes){
      for (let n = 0; n < options.repeatTimes; n++) {
        if(!options.addition) {
          result.push(String(str)) 
          } else { result.push(String(str) + String(options.addition));
      }
      }
    }

  }
  if (options.separator) {
    return result.join(options.separator)
  } else {
    return result.join('+');
  }
}

module.exports = {
  repeater
};
