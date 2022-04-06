const fs = require('fs')

//define a variable and import the fs module from the node library//
const file = process.argv[2]
//again declare a variable with name filre assign the value process.argv[2]//
fs.readFile(file, function (err, contents) {

    //take a function readFile with two arguments as (err, contents)//
  
  
  // write if condition (err) its returns the value the condition is true //  
    if (err) {
    return console.log(err)
  }

  // declare a variable lines assign the argument contents it converts into toString() method and split the lines with('\n') reduce the length-1

  const lines = contents.toString().split('\n').length - 1
  console.log(lines)
})


  //   finally print lines in console //
    
    
    
