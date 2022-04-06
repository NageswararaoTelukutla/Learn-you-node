
let result = 0


for (let i = 2; i < process.argv.length; i++) {
  result += Number(process.argv[i])
}

console.log(result)

/* let take one variable with name result and assign the value 0 
write  for loop of process.argv 
increase result with foor loop
to assign that value to Numbers 
finally print in console */