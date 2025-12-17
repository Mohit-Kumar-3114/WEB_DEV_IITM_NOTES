const mongoose = require("mongoose")

const customerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },

  email: {
    type: String,
    unique: true,
    required: true
  },

  phone: {
    type: String
  },

  age: {
    type: Number
  },

  gender: {
    type: String,
    required: true,
    enum: ["Male", "Female", "Other"]
  },

  customerType: {
    type: String,
    required: true,
    enum: ["Regular", "Premium", "VIP"],
  },
}, { timestamps: true })

const Customer = mongoose.model("Customer", customerSchema)
module.exports = Customer
