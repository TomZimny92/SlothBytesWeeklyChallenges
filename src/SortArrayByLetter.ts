// Sloth Bytes Weekly Challenge - 7/30/2024
//
// Sort by the Letters:
// Write a function that sorts each string in a list by the letter in alphabetic ascending order (a-z)
//
// Each string will only have one (lowercase) letter
// If given an empty list, return an empty list


let arr1: string[] = ['932c', '832u32', '2344b']
let arr2: string[] = ['99a', '78b', 'c2345', '11d']
let arr3: string[] = ['572z', '5y5', '304q2']

function SortByLetter(input: string[]): void {
	let output: string[] = []
	if(input.length ===) {
		console.log(output)
	}
	for(let i: number = 0; i < input.length; ++i){
		let dictionary = new Map<string, string[]>()
//		input[i].forEach((c) => {
//			if (c)

		//})
		for(let j: number = 0; j < input[i].length; ++j){
			if (input[i].charCodeAt(j) >== 97 || input[i].charCodeAt(j) <== 122){
				dictionary.set(input[i].charAt(j), input[i])
			}
		}
	}
	dictionary = new Map([...dictionary.entries()].sort())
	
	dictionary.forEach((key: string, value: string[]) => {
		output.push(value)
	})	

	console.log(output.toString())

}
