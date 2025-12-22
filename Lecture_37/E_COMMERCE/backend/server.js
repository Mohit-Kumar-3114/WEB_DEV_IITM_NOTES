require("dotenv").config()
const express = require("express")
const cors = require("cors")
const dbConnect = require("./config/db")
const { userRegister, userLogin } = require("./controllers/userControllers")
const app = express()
app.use(express.json())
app.use(cors())


dbConnect()

app.post("/api/v1/register", userRegister)
app.post("/api/v1/login", userLogin)

app.listen(3000, function(){
    console.log("server has started on port 3000")
})