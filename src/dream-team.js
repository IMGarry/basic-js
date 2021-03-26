const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) return false  
  return members.filter(it => typeof it === 'string').map(it => it.toUpperCase().trim().slice(0,1)).sort().join('')
};