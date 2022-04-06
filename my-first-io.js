const fs = require('fs')

const buf = fs.readFileSync(process.argv[2]).toString().split('\n').length- 1
console.log(buf)

/*
define a variable and import the fs module from the node library

again delare a another variable named contents to assign the value to a function of readFileSync and take a perameter as  process.argv[2] and converted into toString() merthod split ther lines with('\n') and reduce thr length-1

finally print lines in console

*/

