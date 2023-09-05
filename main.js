// Main file of the application 

  // Read in the file example.js
  function readFile () {
    const fs = require('fs')

    fs.readFile('./example.js', 'utf8', (err, data) => {
      if (err) {
        console.error(err)
        return
      }
      console.log(data)
    })
  }

// Count the rows of code in a file.
function lineCounter (string) {


  // 
}


readFile()