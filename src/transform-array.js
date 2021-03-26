const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  console.log(arr)
  if (!Array.isArray(arr)) {
    throw new Error()
  }
  const newArray = [...arr]
	for (let i = 0; i < arr.length; i++) {
		if (newArray[i] === `--discard-next`) {
			newArray[i] = undefined
      newArray[i + 1] = undefined
		} else if (newArray[i] === `--discard-prev`) {
      newArray[i] = undefined
			newArray[i - 1] = undefined
		} else if (newArray[i] === `--double-next`) {
			newArray[i] = newArray[i + 1]
		} else if (newArray[i] === `--double-prev`) {
			newArray[i] = newArray[i - 1]
		} 
	}
	return newArray.filter((it) => it !== undefined)
}