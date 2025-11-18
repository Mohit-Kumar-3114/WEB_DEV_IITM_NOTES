const express = require("express")
const app = express()

app.use(express.json())

let todos = [
    {
        id: 1,
        title: "TITLE 1",
        description: "DES 1"
    },
    {
        id: 2,
        title: "TITLE 2",
        description: "DES 2"
    },
    {
        id: 3,
        title: "TITLE 3",
        description: "DES 3"
    }
]


app.get("/todos", function(req, res){
    res.send(todos)
})


app.get("/todos/:id", function(req, res){
    let params_id = req.params.id
    for(let i=0; i<todos.length; i++){
        if(todos[i].id == params_id){
            res.send(todos[i])
        }
    }
     res.send("todo with this id is not present")
})


app.post("/add-todo", function(req, res){
    let body_title = req.body.title
    let body_des = req.body.description

    todos.push({
        id: todos.length + 1, 
        title: body_title,
        description: body_des
    })
    console.log(todos)
    res.send("todo added successfully")
})


app.put("/update-todo/:id", function(req, res){
    let params_id = req.params.id
    let body_title = req.body.title
    let body_des = req.body.description

    for(let i=0; i<todos.length; i++){
        if(todos[i].id == params_id){
            todos[i].title = body_title
            todos[i].description = body_des
        }
    }
    console.log(todos)
    res.send("todo updated sucessfully")
})


app.delete("/delete-todo/:id", function(req, res){
    let params_id = req.params.id
    todos.splice(params_id-1, 1)
    console.log(todos)
    res.send("todo deleted successfully")
})


app.listen(3000, function(){
    console.log("server has started on port 3000.....")
})