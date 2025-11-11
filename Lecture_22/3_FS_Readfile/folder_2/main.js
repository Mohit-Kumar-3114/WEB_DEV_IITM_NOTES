const path = require("path")
const fs = require("fs")

let pathName = path.join(__dirname, "..", "folder_1", "a.txt")


fs.readFile(pathName, "utf-8", (error, data)=>{
   if(error){
     console.log(error)
   } 
   else {
    console.log(data)   
   }
})


