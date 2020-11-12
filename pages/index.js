const Assessment = ({}) => {
	/**
	 * #1. Compare two objects to determine if the first one contains property values in the second one
	 */

	const step1 = () => {
		const matches = ({ firstObj, secondObj }) => {
			const firstObjKeys =  Object.keys(firstObj)
			const secondObjKeys =  Object.keys(secondObj)
			if(firstObjKeys.toString() !== secondObjKeys.toString()){
				return(false)
			}
			for(var i=0; i < firstObjKeys.length; i++){
				let key = firstObjKeys[i]
				if(firstObj[key] !== secondObj[key]){
					return(false)
				}
			}
			return(true)
		}

		const obj1 = { age: 25, hair: 'long', beard: true }
		const obj2 = { age: 26, hair: 'short', beard: true }
		const obj3 = { hair: 'long', beard: true }

		console.log(matches({ firstObj: obj1, secondObj: obj2 }))
		console.log(matches({ firstObj: obj2, secondObj: obj3 }))
		console.log(matches({ firstObj: obj3, secondObj: obj1 }))
	}

	step1()

	/**
	 * #2. Filter out the specified values from a specified array. Return the original array without the filtered values.
	 */

	const step2 = () => {
		const remove = ({ array, values }) => {
			values.forEach(item => {
				if(array.indexOf(item) !== -1){ // saves memory
					array = array.filter(val => val !== item )
				}
			})
			return array
		}
		const values = ['e', 'h', 'z']
		const array1 = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
		const array2 = ['l', 'o', 'g', 'q', 'z', 'f', 'j', 'r']

		console.log(remove({ array: array1, values }))
		console.log(remove({ array: array2, values }))
	}

	step2()

	/**
	 * #3. Write a function to generate a random hexadecimal color code.
	 */
	const step3 = () => {
		const colorArr = [1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']
		const hex = () => {
			let hexCode = ['#']
			for(var i=0; i < 6; i++){
				hexCode.push(colorArr[Math.floor(Math.random()*15)])
			}
			return hexCode.join("")
		}
		console.log(hex())
	}

	step3()

	/**
	 * #4. Write a function to implement the Luhn Algorithm used to validate a variety of identification numbers, such as credit card numbers, IMEI numbers, National Provider Identifier numbers etc.
	 */

	const step4 = () => {
		const luhn = input => {
			if(typeof input == 'string' && input.indexOf(' ') !== -1){  
			//might have been good to remove tabs and other white space as well
				input = input.replace(/ /g, '')
			}
			let inputArray = Array.from(input.toString())
			inputArray = inputArray.map(Number)
			const weightedArrray = [] 
			for(var i=0; i < inputArray.length; i++){
				if ( (i % 2) !== 0){
					weightedArrray.push(inputArray[i])
				}
				else{
					const doubled = inputArray[i]*2
					if( doubled  > 9){
						weightedArrray.push(doubled-9)
					}
					else {
						weightedArrray.push(doubled)
					}
				}
			}
			const checkSum = weightedArrray.reduce((sum, item) => sum  + item )
			if( (checkSum %10) == 0){
				return(true)
			}
			return(false)
		}

		console.log(luhn('5221320000307276'))
		console.log(luhn(6011329933655299))
		console.log(luhn(123456789))
		console.log(luhn('4242 4242 4242 4242'))
	}

	step4()

	return <h1>Open developer console to read logs.</h1>
}

export default Assessment
