require("dotenv").config()
const express = require("express")
const bcrypt = require("bcrypt")
const mongoose = require("mongoose")
const app = express()
app.use(express.json())

mongoose.connect(process.env.DATABASE_URL)
.then(function(){
    console.log("DB CONNECTED SUCCESsFULLY")
})
.catch(function(){
    console.log("DB CONNECTION FAILED")
})

const userSchema = new mongoose.Schema({
    email:{
        type: String,
        required: true,
        unique: true
    }, 
    password:{
        type: String,
        required: true
    }
})

const User = mongoose.model("User", userSchema)

app.post("/add_user", async function(req, res){
    const email = req.body.email
    const password = req.body.password

    if(!email || !password){
        res.status(404).send("credentials are missing")
    }

    const alreadyUser = await User.findOne({ email })
    
    if(alreadyUser){
        res.status(404).send("user with this email already exists")
    }

    const hashedPassword = await bcrypt.hash(password, 10) // 10 => salt rounds (higher = more secure, slower)
   
    const result = await User.insertOne({
        email,
        password: hashedPassword
    })

    res.send({
        message: "User added succesfully",
        data: result
    })

})


app.post("/login", async function(req, res){
    const email = req.body.email
    const password = req.body.password
   
    if(!email || !password){
        res.status(404).send("credentials are missing")
    } 

    const user = await User.findOne({email})
    if(!user){
        res.send("user with this email does not exist")
    }

    const isMatch = await bcrypt.compare(password, user.password)

    if(!isMatch){
       res.send("incorrect password")
    }
     
    res.send("login successfull")
})

app.listen(3000, function(){
    console.log("server has started on port 3000")
})
