const express = require("express")
const app = express()

app.use(express.json())


app.get("/", function(req, res){
    res.status(201).send("home page")
})

app.get("/about", function(req,res){
    res.status(203).send("about page")
})

app.listen(3000, function(){
    console.log("server has started on port 3000")
})