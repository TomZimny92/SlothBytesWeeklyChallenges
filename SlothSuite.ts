console.log("Hello, node.js")

import * as commander from 'commander'

const program = new commander.Command()
program.version('1.0.0')

program.parse(process.argv)