const mongoose = require("mongoose")
const Order = require("../models/orderModel")
const User = require("../models/userModel")
// const razorpay = require("razorpay")


// const instance = new razorpay({
//     key_id: process.env.RAZORPAY_KEY_ID,
//     key_secret: process.env.RAZORPAY_KEY_SECRET,
// })

async function placeOrderCOD(req, res){
    try{
        const {userId, address, items, amount} = req.body

        if(!userId || !address || !items || !amount){
            return res.status(400).send({message: "Missing required fields"})
        }

        const newOrder = await Order.create({
            userId,
            items,
            amount,
            address,
            status: "Order Placed",
            paymentMethod: "COD",
            payment: false,
            date: new Date()
        })
        

        if(newOrder){
            // clear user's cart
            const user = await User.findById(userId)
            user.cart = []
            await user.save()
        }

        return res.status(200).send({
            success: true,
            message: "Order placed successfully",
            order: newOrder
        })
    }
    catch(error){
        console.log(error)
        return res.status(500).send({
            success: false, 
            error: error.message
        })
    }
}




// async function placeOrderRazorpay(req, res){
//     try{
//         const {userId, address, items, amount} = req.body

//         if(!userId || !address || !items || !amount){
//             return res.status(400).send({message: "Missing required fields"})
//         }

//         const newOrder = await Order.create({
//             userId,
//             items,
//             amount,
//             address,
//             status: "Order Placed",
//             paymentMethod: "RAZORPAY",
//             payment: false,
//             date: new Date()
//         })

//         const options = {
//             amount: amount * 100,  // converting to paise
//             currency: "INR",
//             receipt: `receipt_order_${newOrder._id}`
//         };

//         await instance.orders.create(options, function(error, order) {
//             if(error){
//                 console.log(error)
//                 return res.status(500).send({
//                     success: false, 
//                     message: error
//                 })
//             }
//             console.log(order)
//             return res.status(200).send({
//                 success: true,
//                 order:order
//             })  
//         })
//     }
//     catch(error){
//         console.log(error)
//         return res.status(500).send({
//             success: false, 
//             error: error.message
//         })
//     }
// }




// async function verifyRazorpay(req, res){
//     try{
//        const { userId, razorpay_order_id } = req.body
//        const orderInfo = await instance.orders.fetch(razorpay_order_id)

//        if(orderInfo.status === 'paid'){
//             await Order.findByIdAndUpdate(orderInfo.receipt, {payment: true})
//             const user = await User.findById(userId)
//             user.cart = []
//             await user.save() 

//             return res.status(200).send({
//                 success: true,
//                 message: "Payment successful"
//             })
//        }
//        else{
//             return res.status(200).send({
//                 success: false,
//                 message: "Payment failed"
//         })
//        }
//     }
//     catch(error){
//         console.log(error)
//         return res.status(500).send({
//             success: false, 
//             error: error.message
//         })
//     }
// }


async function getUserOrders(req, res) {
    try{
        const { userId } = req.body;
        
        if (!userId) {
            return res.status(400).send({ message: "Missing userId" });
        }

        const orders = await Order.aggregate([
            {
                $match: {
                userId: new mongoose.Types.ObjectId(userId)
                }
            },
            {
                $sort: { date: -1 }
            },
            {
                $unwind: "$items"
            },
            {
                $lookup: {
                from: "products",
                localField: "items.productId",
                foreignField: "_id",
                as: "product"
                }
            },
            {
                $unwind: {
                path: "$product",
                preserveNullAndEmptyArrays: true
                }
            },
            {
                $group: {
                _id: "$_id",
                userId: { $first: "$userId" },
                amount: { $first: "$amount" },
                address: { $first: "$address" },
                status: { $first: "$status" },
                paymentMethod: { $first: "$paymentMethod" },
                payment: { $first: "$payment" },
                date: { $first: "$date" },
                createdAt: { $first: "$createdAt" },
                updatedAt: { $first: "$updatedAt" },
                items: {
                    $push: {
                    productId: "$items.productId",
                    size: "$items.size",
                    quantity: "$items.quantity",
                    product: {
                        name: "$product.name",
                        images: "$product.images",
                        price: "$product.price"
                    }
                    }
                }
                }
            }
            ]);


        return res.status(200).send({
            success: true,
            data: orders
        });
    }
    catch(error){
        console.log(error)
        return res.status(500).send({
            success: false, 
            error: error.message
        })
    }
}




async function allOrders(req, res) {
    try{
        const orders = await Order.aggregate([
            {
                $sort: { date: -1 }
            },
            {
                $unwind: "$items"
            },
            {
                $lookup: {
                from: "products",
                localField: "items.productId",
                foreignField: "_id",
                as: "product"
                }
            },
            {
                $unwind: {
                path: "$product",
                preserveNullAndEmptyArrays: true
                }
            },
            {
                $group: {
                _id: "$_id",
                userId: { $first: "$userId" },
                amount: { $first: "$amount" },
                address: { $first: "$address" },
                status: { $first: "$status" },
                paymentMethod: { $first: "$paymentMethod" },
                payment: { $first: "$payment" },
                date: { $first: "$date" },
                createdAt: { $first: "$createdAt" },
                updatedAt: { $first: "$updatedAt" },
                items: {
                    $push: {
                    productId: "$items.productId",
                    size: "$items.size",
                    quantity: "$items.quantity",
                    product: {
                        name: "$product.name",
                        images: "$product.images",
                        price: "$product.price"
                    }
                    }
                }
                }
            }
            ]);
        return res.status(200).send({
            success: true,
            data: orders
        });
    }
    catch(error){
        console.log(error)
        return res.status(500).send({
            success: false, 
            error: error.message
        })
    }
}




const updateOrderStatus = async (req, res) => {
  try {
    const { orderId, status } = req.body

    await Order.findByIdAndUpdate(orderId, { status })

    res.status(200).send({
      success: true,
      message: "Order status updated"
    })
  } catch (error) {
    res.status(500).send({
      success: false,
      message: error.message
    })
  }
}



module.exports = { placeOrderCOD, getUserOrders, allOrders, updateOrderStatus, placeOrderRazorpay, verifyRazorpay }






