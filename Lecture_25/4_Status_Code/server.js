const express = require("express")
const app = express()


app.get("/", function(req,res){
    res.status(203).send("home page") // 203 is a status code  by default it is 200
})

app.get("/about", function(req,res){
    res.status(205).send("about page") // 205 is a status code
})


app.listen(3000, function(){ // server ko start kia h port 3000 par or function ko call kiya h jo server 
                            // start ho jayega tabhi console log print hoga
    console.log("server has started on port 3000")
})


