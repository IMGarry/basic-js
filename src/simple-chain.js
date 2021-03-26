const CustomError = require('../extensions/custom-error')

const chainMaker = {
	chain: [],
	getLength() {
		return this.chain.length
	},

	addLink(value = '( )') {
		this.chain.push('( ' + String(value) + ' )')
		return this
	},

	removeLink(position) {
		if (!Number.isInteger(position) || position < 0 || !position) {
			this.chain = []
			throw new Error()
		}

		this.chain.splice(position - 1, 1)
		return this
	},

	reverseChain() {
		this.chain = this.chain.reverse()
		return this
	},
	finishChain() {
		const result = this.chain.join('~~')
		this.chain.length = 0
		return result
	},
}

module.exports = chainMaker
