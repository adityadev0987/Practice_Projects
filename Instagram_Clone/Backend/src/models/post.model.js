const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    caption:String,
    imageUrl:{
        type:String,
        required:[true,"image url is required"]
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user',
        required:[true,'user token is required']
    }
})

const postModel = mongoose.model('post',postSchema)

module.exports = postModel;