const postModel = require('../models/post.model');
const userModel = require('../models/user.model');
const likeModel = require('../models/like.model');
const jwt = require('jsonwebtoken');
const imageKit = require('@imagekit/nodejs'); // imageKit require for usage
const {toFile} = require('@imagekit/nodejs') ; // helper function that converts buffer to file 

// This tell about you like who is access imageKit
const imageKitPrivateKey = new imageKit({
        privateKey:process.env.IMAGEKIT_PRIVATE_KEY
    })

async function createPostController(req,res){
    // storing files into imageKit
    const file = await imageKitPrivateKey.files.upload({
        file: await toFile(Buffer.from(req.file.buffer),'file'),
        fileName:"Test",
        folder:"insta-clone/posts"
    })
    // creating post
    const post = await postModel.create({
        caption:req.body.caption,
        imageUrl:file.url,
        user:checkToken.id
    })
    //getting user details from userModel 
    const user = await userModel.findById(checkToken.id);

    res.status(201).json({
        username:user.username,
        message:"post created Successfully",
        post,
        
    })  
}

async function getPostController(req,res){
    // getting user id
    const userId = req.user.id;
    // finding all the post of that user from user id
    const post = await postModel.find({
        user:userId
    }).populate('user','username');
    
    res.status(200).json({
        message:`Here are the post created by ${post[0].user.username}`,
        post
    })
}

async function getPostDetailsController(req,res){
    const userId = req.user.id;
    const postId = req.params.postId;

    const post = await postModel.findById(postId);
    if (!post) {
        return res.status(404).json({
            message: "Post not found."
        })
    }
    // checking requesting user is valid
    const userValid = post.id.toString()===postId;
    if(!userValid){
        return res.status(403).json({
            message:"Forbidden Request"
        })
    }
    res.status(200).json({
        message:"post fetched Successfully",
        post
    })
}

async function likeDetailsController(req,res){

    const postid = req.params.postId;
    const user = req.user.username;

    console.log(postid)

    const isPostExist = await postModel.findById(postid);
    if(!isPostExist){
        return res.status(400).json({
            message:"Post Not Exist"
        })
    }
    const isAlreadyLike = await likeModel.findOne({
        post:postid,
        user:user
    })
    if(isAlreadyLike){
        return res.status(200).json({
            message:"You already like the post"
        })
    }

    const likeRecord = await likeModel.create({
        post:postid,
        user:user
    })

    res.status(201).json({
        message:"post liked Successfully",
        likeRecord
    })
}

async function getFeedController(req,res){
    const feed = await postModel.find().populate('user');
    res.status(200).json({
        feed
    })
}

module.exports = {
    createPostController,
    getPostController,
    getPostDetailsController,
    likeDetailsController,
    getFeedController
}