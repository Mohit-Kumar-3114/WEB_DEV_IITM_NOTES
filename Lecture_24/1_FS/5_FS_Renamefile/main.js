const path = require("path")
const fs = require("fs")

let pathName = path.join(__dirname, "a.txt")

fs.rename(pathName, "b.txt", function(error){
    if(error){
        console.log(error)
    }
    else{
        console.log("file rename hogyi hai")
    }
})