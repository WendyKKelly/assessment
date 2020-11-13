/* Three things I notice right off the bat (and practices we use at Ecstatic):
		1. use a code formatter (we use prettier)
		2. make your below more concise (see my alternatives below)
		3. Comment often
*/

const Assessment = ({}) => {
	/**
	 * #1. Compare two objects to determine if the first one contains property values in the second one
	 */

	const step1 = () => {
		const matches = ({ firstObj, secondObj }) => {
			const firstObjKeys = Object.keys(firstObj)
			const secondObjKeys = Object.keys(secondObj)
			if (firstObjKeys.toString() !== secondObjKeys.toString()) {
				return false
			}
			for (var i = 0; i < firstObjKeys.length; i++) {
				let key = firstObjKeys[i]
				if (firstObj[key] !== secondObj[key]) {
					return false
				}
			}
			return true
		}

		// More concise; also, your above solution is incorrect: `obj3` is contained in `obj1` and so should be `true`
		const solution = ({ firstObj, secondObj }) =>
			Object.keys(firstObj).every(x =>
				Object.keys(secondObj).some(y => x === y && firstObj[x] === secondObj[y])
			)

		const obj1 = { age: 25, hair: 'long', beard: true }
		const obj2 = { age: 26, hair: 'short', beard: true }
		const obj3 = { hair: 'long', beard: true }

		console.log('\nYour solution')
		console.log(matches({ firstObj: obj1, secondObj: obj2 }))
		console.log(matches({ firstObj: obj2, secondObj: obj3 }))
		console.log(matches({ firstObj: obj3, secondObj: obj1 }))

		console.log('\nCorrect solution')
		console.log(solution({ firstObj: obj1, secondObj: obj2 }))
		console.log(solution({ firstObj: obj2, secondObj: obj3 }))
		console.log(solution({ firstObj: obj3, secondObj: obj1 }))
	}

	step1()

	/**
	 * #2. Filter out the specified values from a specified array. Return the original array without the filtered values.
	 */

	const step2 = () => {
		const remove = ({ array, values }) => {
			values.forEach(item => {
				if (array.indexOf(item) !== -1) {
					// saves memory
					array = array.filter(val => val !== item)
				}
			})
			return array
		}

		// More concise alternative
		const alternative = ({ array, values }) =>
			array.filter(x => !values.some(y => x === y))

		const values = ['e', 'h', 'z']
		const array1 = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
		const array2 = ['l', 'o', 'g', 'q', 'z', 'f', 'j', 'r']

		console.log('\nYour solution')
		console.log(remove({ array: array1, values }))
		console.log(remove({ array: array2, values }))

		console.log('\nAlternative solution')
		console.log(alternative({ array: array1, values }))
		console.log(alternative({ array: array2, values }))
	}

	step2()

	/**
	 * #3. Write a function to generate a random hexadecimal color code.
	 */

	const step3 = () => {
		const colorArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']

		const hex = () => {
			let hexCode = '#'

			// Slightly cleaned up to make code more concise; no need to create an array when you just need to return it as a string
			for (let i = 0; i < 6; i++) hexCode += colorArr[Math.floor(Math.random() * 15)]

			return hexCode
		}

		console.log('\nYour solution')
		console.log(hex())
	}

	step3()

	/**
	 * #4. Write a function to implement the Luhn Algorithm used to validate a variety of identification numbers, such as credit card numbers, IMEI numbers, National Provider Identifier numbers etc.
	 */

	const step4 = () => {
		const luhn = input => {
			if (typeof input == 'string' && input.indexOf(' ') !== -1) {
				// Good call [-Martin]; might have been good to remove tabs and other white space as well
				input = input.replace(/ /g, '')
			}

			let inputArray = Array.from(input.toString())

			inputArray = inputArray.map(Number)

			const weightedArrray = []

			for (let i = 0; i < inputArray.length; i++) {
				if (i % 2 !== 0) weightedArrray.push(inputArray[i])
				else {
					const doubled = inputArray[i] * 2

					if (doubled > 9) weightedArrray.push(doubled - 9)
					else weightedArrray.push(doubled)
				}
			}

			const checkSum = weightedArrray.reduce((sum, item) => sum + item)

			// Simplified return
			return checkSum % 10 == 0
		}

		console.log('\nYour solution')
		console.log(luhn('5221320000307276'))
		console.log(luhn(6011329933655299))
		console.log(luhn(123456789))
		console.log(luhn('4242 4242 4242 4242'))
	}

	step4()

	return <h1>Open developer console to read logs.</h1>
}

export default Assessment
