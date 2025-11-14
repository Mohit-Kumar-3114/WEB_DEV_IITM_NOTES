// npm init -y
// npm i express


const express = require("express") // express module ko import kia hai
const app = express() // express ka ek instance banaya hai


app.get("/", function(req,res){ // agr url / h or method GET h to home page show karo
    res.send("home page")
})


app.get("/about", function(req,res){ // agr url /about h or method GET h to about page show karo
    res.send("about page")
})


app.get("/login", function(req,res){ // agr url /login h or method GET h to login page show karo
    res.send("login page")
})


app.listen(3000) // server ko start kia h port 3000 par