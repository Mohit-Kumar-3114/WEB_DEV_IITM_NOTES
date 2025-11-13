const path = require("path");
const fs = require("fs");

let path_1 = path.join(__dirname, "folder_1", "1.txt");
let path_2 = path.join(__dirname, "folder_2", "2.txt");
let path_3 = path.join(__dirname, "3.txt");

let data_1 = ""
let data_2 = ""

fs.readFile(path_1, "utf-8", function(error, data){
  if(error){
    console.log(error)
    return
  }

  else{
    data_1= data
    fs.readFile(path_2, "utf-8", function(error, data){
      if(error){
        console.log(error)
        return
    }
    else{
      data_2 = data
      let data_3 = data_1 + data_2
      fs.appendFile(path_3, data_3, function(error){
       if(error){
        console.log(error)
       }
       else{
        console.log("data merged successfully")
       }
      })
    }
    })
  }
})
