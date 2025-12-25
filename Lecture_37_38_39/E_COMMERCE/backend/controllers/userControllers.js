const { userRegisterType, userLoginType } = require("../types/userType")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const User = require("../models/userModel")

async function userRegister(req, res){
    try{
    const {name, email, password} = req.body

    if(!name || !email || !password){
        return res.status(400).send({
            message: "credentials are missing"
        })
    }

    const result = userRegisterType.safeParse({name, email, password})
    if(!result.success){
        return res.status(400).send({
            message: "validation failed"
        })
    }

    const data = result.data

    const alreadyRegistered = await User.findOne({email: data.email})
    if(alreadyRegistered){
        return res.status(400).send({
            message: "user with this email already exists"
        })
    }

    const hashedPassword = await bcrypt.hash(data.password, 10)
    const user = await User.create({
        name: data.name,
        email: data.email,
        password: hashedPassword
    })

    const token = jwt.sign(
        {
            id: user._id
        },
        process.env.JWT_SECRET,
        {expiresIn: "1h"}
    )

    return res.status(200).send({
        message: "user registered successfully",
        data: token
    })
    } catch(error){
    console.log(error)
    return res.status(500).send({
        success: false,
        error: error.message
    })
    }
}




async function userLogin(req, res){
    try{
    const {email, password} = req.body

    if(!email || !password){
        return res.status(400).send({
            message: "credentials are missing"
        })
    }
    
    const result = userLoginType.safeParse({email, password})
    if(!result.success){
        return res.status(400).send({
            message: "Validation failed"
        })
    }
    const data = result.data
    const user = await User.findOne({email: data.email})
    if(!user){
        return res.status(400).send({
            message: "user does not exist with this email"
        })
    }

    const passMatch = await bcrypt.compare(data.password, user.password)
    if(!passMatch){
        return res.status(400).send({
            message: "invalid password"
        })
    }

    const token = jwt.sign(
        {
            id: user._id
        },
        process.env.JWT_SECRET,
        {expiresIn: "1h"}
    )

    return res.status(200).send({
        message: "user login successfully",
        data: token
    })
    } catch(error){
        console.log(error)
        return res.status(500).send({
            success: false,
            error: error.message
        })
    }
}




async function adminLogin(req, res){
    try{
        const{email, password} = req.body
        if(!email || !password){
            return res.status(400).send({
                message: "credentials are missing"
        })
       }

       if(email != process.env.ADMIN_EMAIL || password != process.env.ADMIN_PASSWORD){
            return res.status(400).send({
                message: "Invalid credentials"
            })
       }

       const token = jwt.sign(
        {
            email: email
        },
        process.env.JWT_SECRET,
       )

       return res.status(200).send({
        message: "admin login successfully",
        data: token
       })
    } catch(error){
        console.log(error)
        return res.status(500).send({
            success: false,
            error: error.message
        })
    }

}

module.exports = {userRegister, userLogin, adminLogin}