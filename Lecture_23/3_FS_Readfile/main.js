const path = require("path")
const fs = require("fs")

// __dirname - path to current directory
let pathName = path.join(__dirname, "folder_1", "a.txt" )


// fs.readFile(pathName, encoding , callback(error, data))
fs.readFile(pathName, "utf-8", function(error, data){
   if(error){
    console.log(error)
   }
   else {
    console.log(data)
   }
})

// fs.readFile function is used to read the contents of a file asynchronously.