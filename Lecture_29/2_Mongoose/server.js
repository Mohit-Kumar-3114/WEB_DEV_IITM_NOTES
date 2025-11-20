// hm apne url vgrah ko expose ni krna chahte isliye we store them in env files
require("dotenv").config()
const express = require("express")
const mongoose = require("mongoose")
const app = express()


// connecting to db it return a promise so we use .then and .catch to handle the promise
mongoose.connect(process.env.DATABASE_URL)
.then(function(){
    console.log("db connected")
})
.catch(function(error){
    console.log(error)
    console.log("db se connection nhi hua")
})

// schema 
const studentSchema = new mongoose.Schema({
    roll_no: Number,
    name: String,
    degree: String
})

// Model/Collection
// first argument is the name of the collection and second argument is the schema
// mongoose automatically converts the name of the collection to lowercase and plural
const Student = mongoose.model("Student", studentSchema)

let student = {
    roll_no : 22,
    name: "Zakir",
    degree: "BTECH"
}


async function addStudent(){
const res = await Student.create(student) // create method promise return krta h so we used await to wait for the promise to resolve
console.log("student added successfully")
console.log(res)
}

addStudent()

app.listen(3000, function(){
    console.log("server has started on port 3000")
})
