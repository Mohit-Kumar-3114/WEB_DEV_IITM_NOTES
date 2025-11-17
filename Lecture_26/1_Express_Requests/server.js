const express = require("express")
const app = express()

app.use(express.json()) // to parse json data

// array of objects
let students = [ 
    {
        id: 1,
        name: "Safiullah",
        degree: "BTECH"
    }, 
    {
        id: 2,
        name: "Jatin", 
        degree: "BCA"
    },
    {
        id: 3, 
        name: "Saniya",
        degree: "BCA"
    }
]




app.get("/students", function(req, res){
    res.send(students)
})




app.get("/students/:id", function(req, res){
    let params_id = req.params.id
    console.log("id that is coming in params: ", params_id) 

    let dataToSend 
    for(let i=0; i<students.length; i++){
        if(students[i].id == params_id){
            dataToSend = students[i]
        }
    }
    res.send(dataToSend)

    // res.send(students.find(function(item){
    //    return item.id == params_id
    // }))
})




app.post("/add_student", function(req, res){
    let body_name = req.body.name
    let body_degree = req.body.degree
    students.push({
        id: students.length + 1, 
        name: body_name, 
        degree: body_degree
    })
    console.log(students)
    res.send("student added successfully")
})




app.put("/update_student/:id", function(req, res){
    let params_id = req.params.id
    let body_name = req.body.name
    for(let i=0; i<students.length; i++){
     if(students[i].id == params_id){
        students[i].name = body_name
     }
    }
    console.log(students)
    res.send("student details updated successfully")
})




app.delete("/delete_student/:id", function(req,res){
   let params_id = req.params.id
   students.splice(params_id-1, 1)
   console.log(students)
   res.send("student deleted successfully")
})




app.listen(3000, function(){
    console.log("Server has started on 3000 port..")
})






