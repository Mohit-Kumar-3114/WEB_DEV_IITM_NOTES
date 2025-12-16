const mongoose = require("mongoose")

const orderSchema = new mongoose.Schema({
    item:{
        type: String,
    },
    customerId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Customer"
    }
}, {timestamps: true})

const Order = mongoose.model("Order", orderSchema)
module.exports = Order