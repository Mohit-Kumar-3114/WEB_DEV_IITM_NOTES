const express = require("express")
const app = express()
const path = require("path")
const htmlPath = path.join(__dirname, "index.html")
const cssPath = path.join(__dirname, "style.css")
const jsPath = path.join(__dirname, "main.js")

app.get("/", function(req, res){
   res.sendFile(htmlPath)
})

app.get("/style.css", function(req, res){
    res.sendFile(cssPath)
})

app.get("/main.js", function(req, res){
    res.sendFile(jsPath)
})

app.listen(3000, function(){
    console.log("server has started on port 3000")
})