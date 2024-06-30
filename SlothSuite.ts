console.log("Hello, node.js")

import * as commander from 'commander'

const program = new commander.Command()
program.version('1.0.0')

program
	.command('say-hello')
	.description('Prints a friendly greeting')
	.action(() => {
		console.log('Hello, world')
	})


program.parse(process.argv)


