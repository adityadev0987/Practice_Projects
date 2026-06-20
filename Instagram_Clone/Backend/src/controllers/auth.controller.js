const userModel = require('../models/user.model');
const jwt = require('jsonwebtoken');
// const crypto = require('crypto');
const bcrypt = require('bcrypt');

async function registerApi(req,res){
    // destructring data of user
    const{username,email,password,bio,profileImage} = req.body;
    // finding if user given data is match in our databse
    const isAlreadyExist = await userModel.findOne({
        $or:[
            {username},{email}
        ]
    })
    // if find : returning back that already exist data
    if(isAlreadyExist){
        return res.status(409).json({
            message:
            isAlreadyExist.username === username ? 
            "username already exist" : "email already exist"
        })
    }
    //hashing the password for security
    const hash = await bcrypt.hash(password,10)
    // if not then registering in our databse
    const user  = await userModel.create({
        username,email,
        password:hash
        ,bio,profileImage
    })
    // creating token

    const token = jwt.sign({
        id:user._id,username:user.username
    },process.env.JWT_SECRET , {expiresIn:"1d"});

    // set token in cookie storage

    res.cookie('token',token);

    // sending message
    res.status(201).json({
        message:"Registered Successfully",
        username : user.username,
        email:user.email,
        bio:user.bio,
        profileImage:user.profileImage
    })
}

async function loginApi(req,res){
    const{username,email,password} = req.body;

    const user = await userModel.findOne({
        $or:[
            {username},
            {email}
        ]
    })
    if(!user){
        return res.status(404).json({
            message:"User not found"
        })
    }
    // const hash = crypto.createHash('md5').update(password).digest('hex');

    const isPasswordValid = await bcrypt.compare(password,user.password)
    if(!isPasswordValid){
        return res.status(401).json({
            message:"Password is Incorrect"
        })
    }

    const token = jwt.sign({
        id:user._id,username:user.username
    },process.env.JWT_SECRET ,{expiresIn:"1d"})
    
    res.cookie('token',token)

    res.status(201).json({
        message:'Login Successfully',
        username : user.username,
        email:user.email,
        bio:user.bio,
        profileImage:user.profileImage

    })
}

async function getMeApi(req,res){
    const userId = req.user.id;

    const record = await userModel.findById(userId)

    res.status(200).json({
        message:"Here is your details",
        record
    })
}

module.exports = {
    registerApi,
    loginApi,
    getMeApi
}