const express = require("express")
const rateLimiter = require("express-rate-limit")
const app = express()
app.use(express.json())

const limiter = rateLimiter({
    windowMs: 1 * 60 * 1000, // 1 minute
    max: 5,
    message: "Too many login attempts"
})

app.use(limiter)


app.get("/login", function(req, res){
    res.send("login attempt is called")
})


app.listen(3000, function(){
    console.log("server has started on port 3000")
})