const CustomError = require('../extensions/custom-error')

module.exports = function repeater(str, options) {
	const s = String(str) 
	const repeatTimes = options.repeatTimes
	const separator = options.separator || '+'
	const addition = String(options.addition) 
	const additionRepeatTimes = options.additionRepeatTimes
	const additionSeparator = options.additionSeparator || '|'

	if (typeof options === 'undefined') return s

	if (!repeatTimes && !addition) return s

	if (repeatTimes && addition === 'undefined') {
		return s.concat((separator + s).repeat(repeatTimes - 1))
	}

  if (repeatTimes && addition !== 'undefined' && !additionRepeatTimes) {
		return s.concat(addition + separator).repeat(repeatTimes - 1) + s + addition 
	}
  
	if (!repeatTimes && addition !== 'undefined' && !additionRepeatTimes) {
		return s + addition
	}
	if (
		repeatTimes &&
		addition &&
		typeof additionRepeatTimes !== 'undefined' &&
		additionSeparator
	) {
		return (
			s +
			addition.concat(additionSeparator).repeat(additionRepeatTimes - 1) +
			addition
		).concat(
			(
				separator +
				s +
				addition.concat(additionSeparator).repeat(additionRepeatTimes - 1) +
				addition
			).repeat(repeatTimes - 1)
		)
	}
}
