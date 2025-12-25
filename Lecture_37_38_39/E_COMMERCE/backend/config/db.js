const mongoose = require("mongoose")

async function dbConnect(){
    mongoose.connect(process.env.DATABASE_URL)
    .then(function(){
        console.log("DB connected successfully")
    })
    .catch(function(){
        console.log("DB connection failed")
    })
}

module.exports = dbConnect