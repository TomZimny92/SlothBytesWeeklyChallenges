import * as commander from 'commander'

const program = new commander.Command()
program.version('1.0.0')

// I.E. node .\SlothSuite.js greet 'tom' -f
program
	.command('greet <name>')
	.description('Greet a person')
	.option('-f, --formal', 'Use a formal greeting')
	.action((name, options) => {
		const greeting = options.formal ? 'Good day' : 'Hello'
		console.log(`${greeting}, ${name}`)
	})




program.parse(process.argv)
