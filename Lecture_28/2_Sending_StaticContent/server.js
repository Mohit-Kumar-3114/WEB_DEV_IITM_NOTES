const express = require("express")
const app = express()
const path = require("path")

// Ye ek built-in middleware or ye '/' request pr work krta hai 
// ye sari static files ko serve kr dega jo bhi public folder k ander hongi
app.use(express.static(path.join(__dirname, "public")))



// this will not work if public folder has html file
app.get("/", function(req, res){
    res.send("hlo world")
})


app.listen(4000, function(){
    console.log("server has started on port 4000")
})