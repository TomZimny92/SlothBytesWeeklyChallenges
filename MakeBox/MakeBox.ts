// Sloth Bytes Challenge: June 25, 2024
//
//Make a Box:
//	Create a function that creates a box based on dimension n
//
//

function makeBox(n: number): string[] {
	const boxChar: string = '#'
	let result: string[] = []
	let line: string = ''
	for (let x = 0; x < n; ++x){
		for (let y = 0; y < n; ++y){
			if (x == 0 || x == n - 1){
				line += boxChar
				continue
			}	
			if (y == 0 || y < n) {
				line += boxChar
			}
			else {
				line += ' '
			}
		}
		result.push(line)
	}
	
	
	

}

function printBox(box: string[]): void {

}
