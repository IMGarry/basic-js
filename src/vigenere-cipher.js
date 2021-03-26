const CustomError = require('../extensions/custom-error')

class VigenereCipheringMachine {
	constructor(mode = true) {
		this.mode = mode
	}

	encrypt(message, k) {
    if (!message || !k) throw new Error()

		const word = [...message.toUpperCase()] // переводим в UPPER
		const len = message.length // фиксируем длинну слова
		let key = [...k.toUpperCase()] // объявляем ключ
		let arr = []

		for (let i = 0; i < word.length; i++) {
			if (key.length < len) {
				// уравниваем длинну
				key = key.concat(key)
				key = key.slice(0, len)
			}

			if (/[a-z]/i.test(word[i])) {
				arr.push(key[i])
			} else {
				key.splice(i, 0, '')
				arr.push(word[i])
			}
		}

		const result = []

		for (let i = 0; i < word.length; i++) {
			if (/[A-Z]/.test(word[i])) {
				result[i] =
					word[i].charCodeAt() + key[i].charCodeAt() < 26
						? String.fromCharCode(word[i].charCodeAt() + key[i].charCodeAt() + 65)
						: String.fromCharCode(
								((word[i].charCodeAt() + key[i].charCodeAt()) % 26) + 65
						  )
			} else {
				result[i] = word[i]
			}
		}

		return this.mode === true ? result.join('') : result.reverse().join('')


	}

	decrypt(message, k) {
		if (!message || !k) throw new Error()

		const word = [...message.toUpperCase()] // переводим в UPPER
		const len = message.length // фиксируем длинну слова
		let key = [...k.toUpperCase()] // объявляем ключ
		let arr = []

		for (let i = 0; i < word.length; i++) {
			if (key.length < len) {
				// уравниваем длинну
				key = key.concat(key)
				key = key.slice(0, len)
			}

			if (/[a-z]/i.test(word[i])) {
				arr.push(key[i])
			} else {
				key.splice(i, 0, '')
				arr.push(word[i])
			}
		}

		const result = []

		for (let i = 0; i < word.length; i++) {
			if (/[A-Z]/.test(word[i])) {
				result[i] =
					word[i].charCodeAt() - key[i].charCodeAt() < 0
						? String.fromCharCode(26 + word[i].charCodeAt() - key[i].charCodeAt() + 65)
						: String.fromCharCode(word[i].charCodeAt() - key[i].charCodeAt() + 65)
			} else {
				result[i] = word[i]
			}
		}
		return this.mode === true ? result.join('') : result.reverse().join('')
	}
}

module.exports = VigenereCipheringMachine