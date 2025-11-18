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


// This is ugly way of writing the code as we are repeating the same code again and again
app.get("/student-name", function(req, res){
    let id = req.headers.id

    let student = students.find(function(items){
        return items.id == id 
    })

    if(!student){ // tab chalega jab student exist ni krega 
       res.status(403).send("student with this id does not exist")
    }

    res.send(student.name)
})




app.get("/student-age", function(req, res){
    let id = req.headers.id

    let student = students.find(function(items){
        return items.id == id 
    })

    if(!student){ // tab chalega jab student exist ni krega 
       res.status(403).send("student with this id does not exist")
    }

    res.send(student.age)
})




app.get("/student-city", function(req, res){
    let id = req.headers.id

    let student = students.find(function(items){
        return items.id == id 
    })

    if(!student){ // tab chalega jab student exist ni krega 
       res.status(403).send("student with this id does not exist")
    }
     
    res.send(student.city)
})


app.listen(3000, function(){
    console.log("server has started on port 3000")
})