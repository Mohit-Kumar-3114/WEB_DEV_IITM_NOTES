const path = require("path")
const fs = require("fs")

let pathName = path.join(__dirname, "a.txt")

let data = "\nsecond data"

fs.appendFile(pathName, data, function(error){
    if(error){
        console.log(error)
    }
    else{
        console.log("data dal gya hai")
    }
})