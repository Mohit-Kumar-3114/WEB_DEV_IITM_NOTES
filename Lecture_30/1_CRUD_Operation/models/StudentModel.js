const mongoose = require("mongoose")

// let studentSchema = mongoose.Schema({
//     name: String,
//     degree: String,
//     age: Number,
//     phone: String,
//     email: String,
//     city: String,
//     state: String,
//     gender: String
// })


let studentSchema = mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    degree:{
        type: String,
        enum: ["BCA", "BTECH", "BBA", "BA", "BPHARMA"],
        required: true,
    },
    age:{
        type: Number,
        min: 16
    },
    phone: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    city: {
        type: String,
        required: true,
    },
    state: {
        type: String,
        required: true,
    },
    gender: {
        type: String,
        enum: ["male", "female"],
        required: true,
    }
})

const Student = mongoose.model("student", studentSchema)
module.exports = Student 