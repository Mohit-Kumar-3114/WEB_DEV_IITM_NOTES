const express = require("express")
const app = express()

app.use(express.json()) // global middleware 

let students = [
    {
        id: 1,
        name: "Jatin", 
        degree: "BCA",
        age: 20,
        phone_no: "xxxxxxxxx",
        email: "jatin@gmail.com",
        city: "Ganaur",
        state: "Haryana",
        gender: "male"
    },
    {
        id: 2,
        name: "Vansh", 
        degree: "BCA",
        age: 21,
        phone_no: "yyyyyyyyy",
        email: "vansh@gmail.com",
        city: "Rai",
        state: "Haryana",
        gender: "male"
    },
    {
        id: 3,
        name: "Zakir",
        degree: "BTECH",
        age: 23,
        phone_no: "zzzzzzzzz",
        email: "zakir@gmail.com",
        city: "Faridabad",
        state: "Haryana",
        gender: "male"
    }
]



// middleware function to check if student id exists
// it takes three parameters req, res, next
function check_id_existence(req, res, next){
    let id = req.headers.id
    let student = students.find(function(item){
        return item.id == id
    })

    if(!student){
        res.send("student with this id not exist")
    }

    req.body = student // body k ander student ka data attach kr dia 
    next() // agle callback function ko call kr dega
}


// phle check_id_existence chalega fir uske bad jo callback function hoga wo chalega
app.get("/student-name", check_id_existence, function(req, res){
    res.send(req.body.name)
})


app.get("/student-age", check_id_existence, function(req, res){
     res.send(req.body.age)
})


app.get("/student-city", check_id_existence, function(req, res){
    res.send(req.body.city)
})


app.listen(3000, function(){
    console.log("server has started on port 3000")
})