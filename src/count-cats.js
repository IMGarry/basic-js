const CustomError = require("../extensions/custom-error");

module.exports = function countCats(backyard) {
  return backyard.flat().filter(it => it === '^^').length
};