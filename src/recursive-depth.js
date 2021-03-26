const { match } = require('sinon')
const CustomError = require('../extensions/custom-error')

module.exports = class DepthCalculator {
	calculateDepth(arr) {
		let depth = 1
		for (let i = 0; i < arr.length; i++) {
			let curDepth = 0
			if (arr[i] instanceof Array) {
				curDepth = 1 + this.calculateDepth(arr[i])
				if (curDepth > depth) {
					depth = curDepth
				}
			}
		}
		return depth
	}
}
