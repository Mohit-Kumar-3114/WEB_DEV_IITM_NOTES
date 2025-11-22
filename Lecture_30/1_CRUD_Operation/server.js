require("dotenv").config()
const express = require("express")
const mongoose = require("mongoose")
const app = express()
app.use(express.json())
const Student = require("./models/StudentModel")


mongoose.connect(process.env.DATABASE_URL)
.then(function(){
    console.log("db is connected successfully")
})
.catch(function(){
    console.log("db connect ni hua")
})


app.get("/api/students", async function(req, res){
    const result = await Student.find()
    res.send(result)
})


app.get("/api/student/:id", async function(req, res){
   const result = await Student.findById(req.params.id) // works on inbuilt _id 
   res.send(result)
})


app.get("/api/student_by_age", async function(req, res){
   const result = await Student.find({age: { $gt : 20}})
   res.send(result)
})


app.post("/api/add_student", async function(req, res){
    // const name = req.body.name
    // const degree = req.body.degree
    // const age = req.body.age
    // const phone = req.body.phone
    // const email = req.body.email
    // const city = req.body.city
    // const state = req.body.state
    // const gender = req.body.gender
    // const {name, degree, age, phone, email, city, state, gender} = req.body

    // const result = await Student.create({
    //     name,
    //     degree,
    //     age,
    //     phone,
    //     email,
    //     city,
    //     state,
    //     gender 
    // })

    const result = await Student.insertOne(req.body)
    // const result = await Student.insertMany(req.body)
    res.send({"student added succesfully": result})
})


app.put("/api/update_student/:id", async function(req, res){
    const id = req.params.id
    const result = await Student.updateOne({_id : id}, req.body)
    res.json({
        message: "student updated succesfully",
        result
    })
})


app.delete("/api/delete_student/:id", async function(req,res){
    const id = req.params.id
    const result = await Student.deleteOne({_id : id})
    res.send(result)
})


app.listen(3000, function(){
    console.log("server has started on port 3000")
})


