const path = require("path")
const fs = require("fs")

let pathName = path.join(__dirname, "a.txt")

fs.unlink(pathName, function(error){
    if(error){
        console.log(error)
    }
    else{
        console.log("file delete hogyi hai")
    }
})