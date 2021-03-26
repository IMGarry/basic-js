const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sample) {
  const ln = 0.693 
  const k = ln/HALF_LIFE_PERIOD
  const t = Math.ceil(Math.log(MODERN_ACTIVITY/Number(sample))/k) 
  if (typeof sample !== 'string' || isNaN(sample) || Number(sample) <= 0 || Number(sample) > MODERN_ACTIVITY) return false
  return t
};

