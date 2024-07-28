// Sloth Bytes Challenge - July 23, 2024
//
// Check if a string is formatted as a title. 
// A title string is when every word of the string start with an upper case letter
//
// 
function IsStringTitle(input: string): boolean {
	const words: string[] = input.split(' ')
	let isTitle: boolean = true
	for (let i: number = 0; i < words.length; ++i){
		let word: string = words[i]
		if (word[0] !== word[0].toUpperCase()){
			isTitle = false	
		}
	}
	return isTitle
}
