const fs = require('fs')// import the fs module in node library //
const path = require('path')// import thye path module from noode library //

const folder = process.argv[2] // dec lare a varable folder to assign process.argv[2] value //
const ext = '.' + process.argv[3] // declare another variable ext concat the process.argv[3] //

fs.readdir(folder, function (err, files) {   // write a function readdir take perameters as (err , files) //
  if (err) return console.error(err) // write if condition (err) return value in console if the value is true //
  files.forEach(function (file) {
    if (path.extname(file) === ext) {
      console.log(file) // print file in console //
    }
  })
})