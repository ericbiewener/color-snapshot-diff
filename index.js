const fs = require('fs')
const path = require('path')
const chalk = require('chalk')

let str = ''
const text = fs.readFileSync(path.join(__dirname, 'source.js'), 'utf-8')
for (const line of text.split('\n')) {
  const trimmedLine = line.trim()
  str += trimmedLine.startsWith('- ')
    ? chalk.green(line)
    : trimmedLine.startsWith('+ ')
      ? chalk.red(line)
      : line

  str += '\n'
}

console.log(str)
