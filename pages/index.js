const Assessment = ({}) => {
	/**
	 * #1. Compare two objects to determine if the first one contains property values in the second one; for example, `person3` below is contained in `person1` below and so should be `true`, while `person3` is not contained in `person2`
	 */

	const step1 = () => {
		const matches = ({ firstObj, secondObj }) => {
				const fkey = Object.keys(firstObj);
				return fkey.every(key => firstObj[key] === secondObj[key]);
		}

		const person1 = { age: 25, hair: 'long', beard: true };
		const person2 = { age: 26, hair: 'short', beard: true };
		const person3 = { hair: 'long', beard: true };
		const person4 = { eyes: 'blue', beard: true };
		const person5 = { age: 25, eyes: 'blue', beard: true }

		console.log(matches({ firstObj: person1, secondObj: person2 }));
		console.log(matches({ firstObj: person2, secondObj: person3 }));
		console.log(matches({ firstObj: person3, secondObj: person1 }));
		console.log(matches({ firstObj: person1, secondObj: person4 }));
		console.log(matches({ firstObj: person4, secondObj: person5 }));
		console.log(matches({ firstObj: person1, secondObj: person5 }));

}

step1();

	step1()

	/**
	 * #2. Filter out the specified values from a specified array. Return the original array without the filtered values.
	 */

	const step2 = () => {
		const remove = ({ array,values}) => {
			// Fill in solution here
			return array.filter(x => values.indexOf(x) < 0);
		}
    const values = ['e', 'h', 'z']
    const array1 = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
	const array2 = ['l', 'o', 'g', 'q', 'z', 'f', 'j', 'r']
    const array3 = ['e', 'h', 'z']
    const array4 = []
		
    console.log(remove({ array: array1, values}))
	console.log(remove({ array: array2, values}))
    console.log(remove({ array: array3, values}))
    console.log(remove({ array: array4, values}))

	}

	step2()

	/**
	 * #3. Write a function to generate a random hexadecimal color code.
	 */
	const step3 = () => {
		const hex = () => {
			// Fill in solution here; feel free to look up hexadecimal codes on the internet, but don’t look up a code solution
			const random = Math.floor(Math.random()*255*255*255).toString(16);
			    if(random.length !== 6) {
            return false;
         } else if(random.length === 6) {
            return proper = "#" + random;
	 }
}
     console.log(hex())
	}

	step3()

	/**
	 * #4. Write a function to implement the Luhn Algorithm used to validate a variety of identification numbers, such as credit card numbers, IMEI numbers, National Provider Identifier numbers etc.
	 */

	const step4 = () => {
		const luhn = input => {
    
			let value = input.toString().replace(/ /g, "").split('').reverse().map(x => Number(x));
		    let end = value.splice(0, 1)[0];
	        let result = value.reduce((acc, cur, i) => (i % 2 !== 0 ? acc + cur : acc + ((cur * 2) % 9)), 0);
	        result += end;
	             return result % 10 === 0;
		
		}
			
			  console.log(luhn('5221320000307276'));
			  console.log(luhn(6011329933655299))
			  console.log(luhn(123456789))
			  console.log(luhn('4242 4242 4242 4242'))
			  console.log(luhn('79927398713'))
			  console.log(luhn(4485275742308327))

	step4()

	return <h1>Open developer console to read logs.</h1>
  }
}

export default Assessment
