const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (members == null) {
    return false
  }
  let result = [];
  for (let i = 0; i<members.length;i++) {
    
    if (typeof members[i] === 'string') {
      let a = members[i].split(' ').join('');
      result.push(a[0].toUpperCase());
    }
    
  }
  return result.sort(function(a,b) {
    return   a.charCodeAt()-b.charCodeAt()
  }).join('');
}

module.exports = {
  createDreamTeam
};
