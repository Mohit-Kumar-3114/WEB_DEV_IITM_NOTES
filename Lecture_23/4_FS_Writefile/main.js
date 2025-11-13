const path = require("path")
const fs = require("fs")

let pathName = path.join(__dirname,"folder_1", "a.js" )

let dataToInsert = `console.log("hello world")`

// fs.writeFile(pathName, dataToInsert, callback(error))
fs.appendFile(pathName, dataToInsert, function(error){
    if(error){
        console.log(error)
    }
    else{
        console.log("data insert kr dia")
    }
})


// fs.writeFile function is used to write data to a file asynchronously.