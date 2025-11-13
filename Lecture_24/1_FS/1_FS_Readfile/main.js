const path = require("path")
const fs = require("fs")

let pathName = path.join(__dirname, "folder_1", "a.js" )


fs.readFile(pathName, "utf-8", function(error,data){
    if(error){
        console.log(error)
        return
    }
    else{
        console.log(data)
    }
})