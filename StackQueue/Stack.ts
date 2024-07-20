// Stack - Sloth Bytes 7/16/2024
//
// Implement a Stack
//
//

class Stack {
	let stack: number[]
	let size: number

	constructor(){
		this.stack = [] 
		this.size = 0
	}

	push(value: number): void {			
		this.stack.push(value)
		this.size++
	}

	pop(): void {
		this.stack.pop()
		this.size--
	}

	isEmpty(): boolean {
		return this.size === 0
	}

	peek(): number {
		return this.stack[this.size - 1]
	}
}

let testStack = new Stack()

for(let i = 1; i <= 10; ++i){
	testStack.push(i)
}


