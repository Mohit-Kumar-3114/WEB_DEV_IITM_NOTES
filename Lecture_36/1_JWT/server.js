require("dotenv").config()
const express = require("express")
const mongoose = require("mongoose")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const app = express()
app.use(express.json())

mongoose.connect(process.env.DATABASE_URL)
.then(function(){
    console.log("DB CONNECTED SUCCESSFULLY")
})
.catch(function(){
    console.log("DB CONNECTION FAILED")
})

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    }, 
    password:{
        type: String,
        required: true
    },
    gender:{
        type: String,
        enum: ["Male", "Female"]
    },
    age:{
        type: Number,
        min: 18
    },
    city:{
        type: String
    },
    state:{
        type: String
    }
})

const User = mongoose.model("User", userSchema)

async function authMiddleWare(req, res, next){
    const token = req.headers.authorization
    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    if(!decoded){
        res.send("you are not an authorised user as token is wrong")
    }
    req.body = {
        id: decoded.id,
        email: decoded.email
    }
    next()
}



app.post("/signup", async function(req, res){
    const {name, email, password, gender, city, state, age } = req.body
 
    const alreadyUser = await User.findOne({ email })
    
    if(alreadyUser){
        res.status(404).send("user with this email already exists")
    }

    const hashedPassword = await bcrypt.hash(password, 10) // 10 => salt rounds (higher = more secure, slower)
   
    const result = await User.insertOne({
        name,
        email,
        password: hashedPassword,
        age,
        city,
        state,
        gender
    })

    res.send({
        message: "Signup succesfully",
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
     
    // Generate the token
    // const token = jwt.sign(payload, secretKey, options);
    const token = jwt.sign(
        {
            id: user._id,
            email: user.email // dont store password as it can be decoded
        },
        process.env.JWT_SECRET,
        { expiresIn: '1h'}
    )

    res.send({
        message: "login succesful",
        token: token
    })
})




app.get("/profile", authMiddleWare, async function(req, res){
    const {id, email} = req.body
    const user = await User.findById(id).select("-password")
    if(user){
        res.send({
            profileData: user
        })
    }
})




app.listen(3000, function(){
    console.log("server has started on port 3000")
})