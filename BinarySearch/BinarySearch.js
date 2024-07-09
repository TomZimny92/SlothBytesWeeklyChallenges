// Binary Search - Sloth Bytes 7/2/2024
//
// Given a sorted array of integers and a target integer, find the first occurrence
// of the target and return its index.
//
// Return -1 if the target is not in the array.
//
//

let arr = [1, 3, 5, 7, 9, 11, 13, 15, 17] 

function findTarget(arr, target){
	let begin = 0
	let end = arr.length - 1

	while (begin <= end){
		let mid = Math.floor((begin + end) / 2)
		if (arr[mid] == target){
			return mid
		}
		else if (arr[mid] < target){
			console.log(`arr[mid]: ${arr[mid]}`)
			console.log(`mid + 1: ${mid + 1}`)
			begin = mid + 1
		}
		else {
			console.log(`arr[mid]: ${arr[mid]}`)
			console.log(`mid + 1: ${mid + 1}`)
			end = mid - 1
		}
	}
	return -1
}

console.log(findTarget(arr, 11))
