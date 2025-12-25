const Product = require("../models/productModel");
const cloudinary = require("cloudinary").v2;

async function addProduct(req, res){
    try{
        const {name, description, price, category, subCategory, sizes, bestSeller} = req.body

        if(!name || !description || !price || !category || !subCategory || !sizes || !bestSeller){
            return res.status(400).send({
                message: "product details are missing"
            })
        }

        let image1, image2, image3, image4 
        console.log(req.files)
        if(req.files.image1){
            image1 = req.files.image1[0]
        }
        if(req.files.image2){
            image2 = req.files.image2[0]
        }
        if(req.files.image3){
            image3 = req.files.image3[0]
        }
        if(req.files.image4){
            image4 = req.files.image4[0]
        }

        const images = [image1, image2, image3, image4].filter((item)=> item !== undefined)

        let imagesUrl = await Promise.all(
            images.map(async (item) =>{
                let result = await cloudinary.uploader.upload(item.path, {resource_type: "image"})
                return result.secure_url
            })
        )
        console.log(imagesUrl)
        
        const product = await Product.create({
            name, 
            description,
            price: Number(price),
            category,
            subCategory,
            sizes: JSON.parse(sizes),
            bestSeller: bestSeller === "true" ? true : false,
            images: imagesUrl
        })

        return res.status(200).send({
            message: "product added successfully",
            data: product
        })

    } catch(error){
        console.log(error)
        return res.status(500).send({
            success: false,
            error: error.message
        })
    }
}




async function listProducts(req, res){
    try{
        const products = await Product.find().sort({createdAt: -1})
        return res.status(200).send({
            message: "products fetched successfully",
            data: products
        })
    } catch(error){
        console.log(error)
        return res.status(500).send({   
            success: false,
            error: error.message
        })
    }
}




async function singleProduct(req, res){
    try{
        const {productId} = req.params
        if(!productId){
            return res.status(400).send({
                message: "product id is missing"
            })
        }
        const product = await Product.findById(productId)
        return res.status(200).send({
            message: "product fetched successfully",
            data: product
        })
    } catch(error){
        console.log(error)
        return res.status(500).send({
            success: false, 
            error: error.message
        })
    }
}




async function removeProduct(req, res){
    try{
        const {productId} = req.params  
        if(!productId){
            return res.status(400).send({
                message: "product id is missing"
            })
        }
        await Product.findByIdAndDelete(productId)
        return res.status(200).send({
            message: "product removed successfully"
        })
    } catch(error){
        console.log(error)
        return res.status(500).send({
            success: false, 
            error: error.message
        })
    }
}

module.exports = {addProduct, listProducts, singleProduct, removeProduct}