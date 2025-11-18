const express = require("express")
const app = express()

app.use(express.json())


app.get("/add/:number", function(req, res){
    let params_number = req.params.number // params se number ki value milegi
    let ans = 0
    for(let i=1; i<=params_number; i++){
        ans+=i
    }
    res.send(ans)
})


app.get("/add-2", function(req,res){
    let number = req.query.number  // query se number ki value milegi eg- ?number=5
    let ans = 0
    for(let i=1; i<=number; i++){
        ans+=i
    }
    res.send(ans)
})


app.get("/multiple-params/:n1/:n2/:n3", function(req,res){
    let n1 = req.params.n1  
    let n2 = req.params.n2  
    let n3 = req.params.n3  
    let numbers = [n1, n2, n3]
    res.send(numbers)
})


app.get("/multiple-queries", function(req, res){
    let n1 = req.query.n1  // query se n1 or n2 ki value milegi eg- ?n1=5 & n2=10
    let n2 = req.query.n2  
    res.send([n1, n2])
})


app.get("/headers", function(req,res){
    let username = req.headers.username // headers se username or password ki value milegi
    let password = req.headers.password
    res.send([username, password])
})


app.listen(3000, function(){
    console.log("server has started")
})