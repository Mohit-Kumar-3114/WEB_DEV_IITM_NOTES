const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        trim: true
    },
    description:{
        type: String,
        required: true
    },
    category:{
        type: String,
        required: true,
    },
    subCategory:{
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    sizes:{
        type: [String],
        required: true
    },
    bestSeller:{
        type: Boolean,
        required: true,
        default: false
    },
    images:{
        type: [String],
    }
},
   { timestamps: true }
)

const Product = mongoose.models.Product || mongoose.model("Product", productSchema)
module.exports = Product