require("dotenv").config()
const express = require("express")
const cors = require("cors")
const dbConnect = require("./config/db")
const { userRegister, userLogin, adminLogin } = require("./controllers/userControllers")
const cloudinaryConnect = require("./config/cloudinary")
const authAdmin = require("./middlewares/authAdmin")
const authUser = require("./middlewares/authUser")
const upload = require("./middlewares/multer")
const { addProduct, listProducts, singleProduct, removeProduct } = require("./controllers/productController")
const { addToCart, updateCart, getCart } = require("./controllers/cartController")
const app = express()
app.use(express.json())
app.use(cors())


dbConnect()
cloudinaryConnect()

app.post("/api/v1/register", userRegister)
app.post("/api/v1/login", userLogin)
app.post("/api/v1/admin-login", adminLogin)

// Change 'image' to whatever key name you prefer
// app.post('/api/v1/add-product', authAdmin, upload.single('image'), addProduct); // for single file upload

app.post("/api/v1/add-product", authAdmin, upload.fields([
    { name: 'image1', maxCount: 1 },
    { name: 'image2', maxCount: 1 },
    { name: 'image3', maxCount: 1 },
    { name: 'image4', maxCount: 1 }
]), addProduct)

app.get("/api/v1/list-products", listProducts)
app.get("/api/v1/single-product/:productId", singleProduct)
app.delete("/api/v1/remove-product/:productId", authAdmin, removeProduct)


app.post("/api/v1/add-to-cart", authUser, addToCart)
app.post("/api/v1/update-cart", authUser, updateCart)
app.post("/api/v1/get-cart", authUser, getCart)


app.listen(3000, function(){
    console.log("server has started on port 3000")
})




