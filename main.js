// Main file of the application 

const fs = require('fs')
  // Read in the file example.js
  function readFile () {
    return new Promise((resolve, reject) => {
      fs.readFile('./example.js', 'utf8', (err, data) => {
        if (err) {
          reject(err) // If there is an error, reject the Promise with the error
          return
        }
        resolve(data) // If successful, resolve the Promise with the data
      })
    })
  }
  

// Count the rows of code in a file.
async function lineCounter () {
  const string = await readFile()

  const arrayOfRowBreaks = string.split('\n')

  const numberOfLines = arrayOfRowBreaks.length
  console.log(numberOfLines)
  return numberOfLines
}

lineCounter()
