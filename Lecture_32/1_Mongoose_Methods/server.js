require("dotenv").config()
const express = require("express")
const mongoose = require("mongoose")
const User = require("./models/UserModel")
const Post = require("./models/PostModel")
const app = express()
app.use(express.json())

mongoose.connect(process.env.DATABASE_URL)
.then(function(){
    console.log("db connected succesfully")
})
.catch(function(){
    console.log("db not connected")
})




// 1. Create
// a. create()
// b. insertOne()
// c. insertMany()

app.post("/add_user", async function(req, res){
    const firstName = req.body.firstName
    const lastName = req.body.lastName
    const email = req.body.email
    const age = req.body.age

    let userInserted = await User.create({
        firstName: firstName,
        lastName: lastName,
        email: email,
        age: age
    })
   
    res.send({"message": "user added succesfully", data: userInserted})
})

app.post("/add_post", async function(req, res){
    const { description, userId, title } = req.body
    const postInserted = await Post.insertOne({
        title,
        description,
        userId
    })
    res.send({"message": "post added successfully", data: postInserted })
})

app.post("/add_multiple_user", async function(req, res){
    const multipleUserInserted = await User.insertMany(req.body)
    res.send({"message" : "multiple user inserted succesfully", data: multipleUserInserted})
})




// 2. Read
// a. find()
// b. findOne()
// c. findById()

app.get("/users", async function(req, res){
    const allUsers = await User.find()
    res.send(allUsers)
})

app.get("/single_user", async function(req, res){
    const user = await User.findOne()
    res.send(user)
})

app.get("/user_by_age", async function(req, res){
    const userGreaterThan20 = await User.findOne({age : { $gt: 20}})
    res.send(userGreaterThan20)
})

app.get("/user_by_id", async function(req, res){
    const id = req.query.id
    const user = await User.findById(id)
    res.send(user)
})

app.get("/post_by_userId", async function(req, res){
    const id = req.query.id
    const posts = await Post.find({userId : id})
    res.send(posts)
})

app.get("/post_by_email", async function(req, res){
    const email = req.query.email 
    const user = await User.findOne({email})
    const id = user._id
    const posts = await Post.find({userId : id})
    res.send(posts)
})




// 3. Update
// a. updateOne()
// b. updateMany()
// c. findByIdAndUpdate()

app.put("/update_user", async function(req, res){
    const email = req.query.email
    const result = await User.updateOne({ email: email }, { age: 31 })
    res.send({"message": "user updated succesfully", data: result})
})

app.put("/update_post", async function(req,res){
    const email = req.query.email
    const user = await User.findOne({ email : email })
    const result = await Post.updateMany({ userId: user._id }, {description: "This is updated des"})
    res.send({
        "message": "post updated succesfully",
        data: result
    })
})

app.put("/update_user_by_id/:id", async function(req, res){
    const id = req.params.id
    const result = await User.findByIdAndUpdate(id, {age : 32}, {new : true})
    // new true lagane se updated document milega otherwise without iske update to 
    // hojayega but return purana document krega  
    res.send({"message": "user updated succesfully", data: result})
})




// 4. Delete
// a. deleteOne()
// b. deleteMany()
// c. findByIdAndDelete()

app.delete("/delete_user", async function(req, res){
    const email = req.query.email
    const result = await User.deleteOne({email: email})
    res.send({"message": "user delete successfully", data: result})
})

app.delete("/delete_post", async function(req,res){
    const email = req.query.email
    const user = await User.findOne({ email : email })
    if(!user){
        res.send("user not found")
    }
    const result = await Post.deleteMany({ userId: user._id })
    res.send({
        "message": "post deleted succesfully",
        data: result
    })
})

app.delete("/delete_user_by_id/:id", async function(req, res){
    const id = req.params.id
    const result = await User.findByIdAndDelete(id)
    res.send({
        "message": "user deleted successfully",
        data: result
    })
})

app.listen(3000, function(){
    console.log("server has started on port 3000")
})