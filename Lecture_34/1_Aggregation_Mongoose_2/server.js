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

let temp = 0
// Aggregation is used when you want to process data, apply conditions, group, join collections for larger
// dataset when .find() method is not efficient

// 1.  $match filters documents just like .find()
// 2.  $lookup is used to join data from two different collections
// 3.  $unwind breaks an array field into multiple documents
// 4.  $sort sorts the documents based on a field
// 5.  $limit limits the number of documents returned
// 6.  $skip ignores a number of documents from the start of the pipeline output
// 7.  $addFields adds new fields or modifies existing fields in each document
// 8.  $count gives the total number of documents after all previous stages
// 9.  $project is used to include or exclude specific fields from the documents
// 10. $group aggregates documents based on a specified key and allows you to compute sums, counts, averages, min, max, etc.


app.get("/api_1", async function(req, res){
    const result = await Customer.aggregate([
        {
            $match:{
                customerType: "VIP"
            }
        }
    ])
    res.send(result)
})
 

app.get("/api_2", async function(req, res){
    const result = await Customer.aggregate([
        {
            $match:{
                customerType: "VIP",
                age : { $lt : 35 }
            }
        }
    ])
    res.send(result)
})
 

app.get("/api_3", async function(req, res){
    const result = await Customer.aggregate([
        {
            $match:{
                customerType: { $in : ["Premium", "VIP"] }
            }
        }
    ])
    res.send(result)
})


app.get("/api_4", async function(req, res){
    const result = await Customer.aggregate([
        {
            $match:{
                customerType: "VIP"
            }
        }, 
        {
            $lookup:{
                from: "orders",
                localField: "_id",
                foreignField: "customerId",
                as: "orderDetails"
            }
        }
    ])
    res.send(result)
})


app.get("/api_5", async function(req, res){
    const result = await Customer.aggregate([
        {
            $match:{
                customerType: "VIP"
            }
        }, 
        {
            $lookup:{
                from: "orders",
                localField: "_id",
                foreignField: "customerId",
                as: "orderDetails"
            }
        }, 
        {
            $unwind: {
                path: "$orderDetails",
                preserveNullAndEmptyArrays: false
            }
        }
    ])
    res.send(result)
})


app.get("/api_6", async function(req, res){
    const result = await Customer.aggregate([
        {
            $sort:{
                name: -1 // 1 sort in ascending order, -1 sort in descending order
            }
        }
    ])
    res.send(result)
})


app.get("/api_7", async function(req, res){
    const result = await Customer.aggregate([
        {
            $sort:{
                createdAt: -1 // 1 means oldest to newest, -1 means newest to oldest
            }
        }
    ])
    res.send(result)
})


app.get("/api_8", async function(req, res){
    const result = await Customer.aggregate([
        {
            $match:{
                customerType: "Regular"
            }
        },
        {
            $sort:{
                age: 1 
            }
        }
    ])
    res.send(result)
})


app.get("/api_9", async function(req, res){
    const result = await Customer.aggregate([
        {
           $lookup: {
                from: "orders",
                localField: "_id",
                foreignField: "customerId",
                as: "orderDetails"
           }
        },
        {
            $unwind:{
                path: "$orderDetails",
                preserveNullAndEmptyArrays: true
            }
        },
        {
            $sort: {
                "orderDetails.orderAmount" : 1
            }
        }
    ])
    res.send(result)
})


app.get("/api_10", async function(req, res){
    const result = await Customer.aggregate([
        {
           $lookup: {
                from: "orders",
                localField: "_id",
                foreignField: "customerId",
                as: "orderDetails"
           }
        },
        {
            $unwind:{
                path: "$orderDetails",
                preserveNullAndEmptyArrays: true
            }
        },
        {
            $sort: {
                "orderDetails.orderAmount" : 1
            }
        }, 
        {
            $limit: 3
        }
    ])
    res.send(result)
})


app.get("/api_11", async function(req, res){
    console.log("value of temp => ", temp)
    const result = await Customer.aggregate([
        {
           $lookup: {
                from: "orders",
                localField: "_id",
                foreignField: "customerId",
                as: "orderDetails"
           }
        },
        {
            $unwind:{
                path: "$orderDetails",
                preserveNullAndEmptyArrays: true
            }
        },
        {
            $skip: temp
        },
        {
            $limit: 1
        }
    ])
    temp = temp + 1
    res.send(result)
})


app.get("/api_12", async function(req, res){
    const result = await Customer.aggregate([
        {
           $lookup: {
                from: "orders",
                localField: "_id",
                foreignField: "customerId",
                as: "orderDetails"
           }
        },
        {
            $unwind:{
                path: "$orderDetails",
                preserveNullAndEmptyArrays: true
            }
        }, 
        {
            $addFields:{
                newField: "This is new field"
            }
        }
    ])
    res.send(result)
})


app.get("/api_13", async function(req, res){
    const result = await Customer.aggregate([
        {
           $lookup: {
                from: "orders",
                localField: "_id",
                foreignField: "customerId",
                as: "orderDetails"
           }
        },
        {
            $unwind:{
                path: "$orderDetails",
                preserveNullAndEmptyArrays: true
            }
        }, 
        {
            $addFields:{
                finalAmount: { $subtract : ["$orderDetails.orderAmount", "$orderDetails.discount"]}
            }
        }
    ])
    res.send(result)
})


app.get("/api_14", async function(req, res){
    const result = await Customer.aggregate([
        {
            $match:{
                customerType: { $in : ["VIP", "Regular"]}
            }
        },
        {
            $count: "totalCustomersExceptPremimun"
        }
    ])
    res.send(result)
})


app.get("/api_15", async function(req, res){
    const result = await Customer.aggregate([
        {
           $lookup: {
                from: "orders",
                localField: "_id",
                foreignField: "customerId",
                as: "orderDetails"
           }
        },
        {
            $project: {
                _id: 0,
                name: 1,
                email: 1,
                "orderDetails.orderAmount": 1,
                "orderDetails.item": 1
            }
        }
    ])
    res.send(result)
})


app.get("/api_16", async function(req, res){
    const result = await Customer.aggregate([
        {
           $lookup: {
                from: "orders",
                localField: "_id",
                foreignField: "customerId",
                as: "orderDetails"
           }
        },
        {
            $unwind:{
                path: "$orderDetails",
                preserveNullAndEmptyArrays: true
            }
        }, 
        {
            $project: {
                _id: 0,
                name: 1,
                email: 1,
                "orderDetails.orderAmount": 1,
                "orderDetails.item": 1
            }
        }
    ])
    res.send(result)
})


app.get("/api_17", async function(req, res){
    const result = await Customer.aggregate([
        {
            $group:{
                _id: "$gender",
                totalCustomer: {$sum : 1},
                averageAge: { $avg : "$age"},
                minAge: { $min : "$age"},
                maxAge: { $max: "$age"}
            }
        }
    ])
    res.send(result)
})


app.get("/api_18", async function(req, res){
    const result = await Order.aggregate([
        {
            $group:{
                _id: "$paymentMethod",
                totalOrder: {$sum : 1},
                averageAmount: { $avg : "$orderAmount"},
                minAge: { $min : "$orderAmount"},
                maxAge: { $max: "$orderAmount"}
            }
        }
    ])
    res.send(result)
})


app.get("/api_19", async function(req, res){
    const result = await Customer.aggregate([
        {
            $lookup: {
                from: "orders", 
                localField: "_id",
                foreignField: "customerId",
                as: "orderDetails"
            }
        },
        {
            $unwind:{
                path: "$orderDetails",
                preserveNullAndEmptyArrays: true
            }
        },
        {
            $group: {
                _id: "$_id",
                name: {$first: "$name"},
                email: {$first: "$email"},
                totalOrders: {$sum: 1},
                totaLAmountSpent: {$sum: "$orderDetails.orderAmount"},
                minAmountSpent: {$min: "$orderDetails.orderAmount"},
                maxAmountSpent: {$max: "$orderDetails.orderAmount"}
            }
        }
    ])
    res.send(result)
})

app.listen(3000, function(){
    console.log("server has started on port 3000")
})