const mongoose = require('mongoose');

const followSchema = new mongoose.Schema({
    follower:String,
    followee:String,
    status:{
        type:String,
        default:'pending',
        enum:{
            values:['pending','accepted','rejected'],
            message:"Status can be only pending , accepted or rejected"
        }
    }
},{
    timestamps:true
})
followSchema.index({follower:1,followee:1},{unique:true});

const followModel = mongoose.model('follow',followSchema);

module.exports = followModel;