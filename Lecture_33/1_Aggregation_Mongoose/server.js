require("dotenv").config()
const express = require("express")
const mongoose = require("mongoose")
const app = express()
app.use(express.json())
const Customer = require("./models/CustomerModel")
const Order = require("./models/OrderModel")

mongoose.connect(process.env.DATABASE_URL)
.then(function(){
    console.log("db connected successfully")
})
.catch(function(error){
    console.log(error)
    console.log("db not connected")
})


app.post("/add_customer", async function(req, res){
    const email = req.body.email
    const name = req.body.name
    await Customer.create({
        email,
        name
    })
    res.send("customer added succesfully")
})


app.post("/add_order", async function(req, res){
    const customerId = req.body.customerId
    const item = req.body.item
    await Order.create({
        item,
        customerId
    })
    res.send("order added succesfully")
})




// Left Join
app.get("/left_join", async function(req, res){
    const result = await Customer.aggregate([
        {
            $lookup:{
                from: "orders", // collection ka name ayega
                localField: "_id",
                foreignField: "customerId",
                as: "customerDetails"
            }
        }
    ])
    res.send(result)
})




// Left Join + Unwind
app.get("/left_join_unwind", async function(req, res){
    const result = await Customer.aggregate([
        {
            $lookup:{
                from: "orders", // collection ka name ayega
                localField: "_id",
                foreignField: "customerId",
                as: "customerDetails"
            }
        }, 
        {
            $unwind: {
                path: "$customerDetails",
                preserveNullAndEmptyArrays: true
            }
        }
    ])
    res.send(result)
})



// Inner Join 
app.get("/inner_join", async function(req, res){
    const result = await Customer.aggregate([
        {
            $lookup:{
                from: "orders", // collection ka name ayega
                localField: "_id",
                foreignField: "customerId",
                as: "customerDetails"
            }
        }, 
        {
            $unwind: {
                path: "$customerDetails",
                preserveNullAndEmptyArrays: false
            }
        }
    ])
    res.send(result)
})




// Right Join
app.get("/right_join", async function(req, res){
    const result = await Order.aggregate([
        {
            $lookup:{
                from: "customers", // collection ka name ayega
                localField: "customerId",
                foreignField: "_id",
                as: "orderDetails"
            }
        }
    ])
    res.send(result)
})


app.listen(3000, function(){
    console.log("server has started on port 3000")
})