// How Many Vowels - Sloth Bytes June 11, 2024
//
// create a function that takes a string and returns the number (count) of vowels in the string.
//

import * as promptSync from "prompt-sync"
const prompt = promptSync()
const inputString = prompt('Please enter a word...')
let vowelCount = CountVowels(inputString)
console.log(`Number of vowels in '${inputString}': ${vowelCount}`)


function CountVowels(str: string): number {
	let vowelArr: string[] = ['a','e','i','o','u']
	let letter: string = ''
	let result: number = 0
	for (let i = 0; i < str.length; ++i){
		letter = str[i]
		if (vowelArr.includes(letter) || vowelArr.includes(letter.toUpperCase())){
			result++
		}
	}
	return result 
}
