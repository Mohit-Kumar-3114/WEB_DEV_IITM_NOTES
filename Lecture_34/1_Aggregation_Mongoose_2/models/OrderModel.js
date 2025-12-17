const mongoose = require("mongoose")

const orderSchema = new mongoose.Schema({
    item:{
        type: String,
    },

    customerId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Customer"
    },

    orderStatus: {
    type: String,
    enum: ["Pending", "Confirmed", "Shipped", "Delivered", "Cancelled"],
    },

    paymentMethod: {
    type: String,
    enum: ["COD", "UPI", "Card", "NetBanking"]
    },

    orderAmount: {
    type: Number,
    required: true
    },

    discount: {
    type: Number,
    default: 0
    },

}, {timestamps: true})

const Order = mongoose.model("Order", orderSchema)
module.exports = Order