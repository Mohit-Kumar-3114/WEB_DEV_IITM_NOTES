// TOKEN BLACKLISTING
// In this approach, we maintain a list of blacklisted tokens on the server. When a user logs out, we add 
// their token to the blacklist. For every request that requires authentication, we check if the token is 
// in the blacklist. If it is, we reject the request. This way, even if the token has not expired, it 
// cannot be used after logout.

require('dotenv').config();
const express = require('express');
const app = express();
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const JWT_SECRET= "12345"
const cookieParser = require('cookie-parser')

app.use(express.json());
app.use(cookieParser())

mongoose.connect(process.env.DATABASE_URL)
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Could not connect to MongoDB'));

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
})

const blackListingScehma = new mongoose.Schema({
    token: String
})

const User = mongoose.model("User", userSchema)
const BlackListed = mongoose.model("BlackListed", blackListingScehma)



app.post("/signup", async function(req, res){
    const { name, email, password } = req.body
    const newUser = await User.create({  name, email, password })

    const token = jwt.sign({
        userName: newUser.name,
        email: newUser.email
    }, JWT_SECRET)

    
    res.cookie("token", token)
    return res.status(200).send("Signup sucessful")
})


app.post("/login", async function(req, res){
    const { email, password } = req.body
    const user = await User.findOne({ email, password })

    if(!user){
        return res.status(400).send("Invalid credentials")
    }

    const token = jwt.sign({
        userName: user.name,
        email: user.email
    }, JWT_SECRET)

    res.cookie("token", token)
    return res.status(200).send("Login sucessful")
})


app.get("/profile", async function(req, res){
    const { token } = req.cookies

    console.log(token)
    const blackListedToken = await BlackListed.findOne({ token })

    if(blackListedToken){
        return res.status(401).send("Token is blacklisted")
    }

    const decoded = jwt.verify(token, JWT_SECRET)
    if(!decoded){
        return res.status(401).send("Unauthorized user")
    }
    return res.status(200).send(decoded)
})


app.post("/logout", async function(req, res){
    const { token } = req.cookies
    await BlackListed.create({ token })
    res.clearCookie("token")
    return res.status(200).send("Logout successful")
})

app.listen(3000, function(){
    console.log("Server is running on port 3000")
})