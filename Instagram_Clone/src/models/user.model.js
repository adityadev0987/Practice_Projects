const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        unique:[true,"Username already exist"],
        required:true
    },
    email:{
        type:String,
        unique:[true,"Email already exist"],
        required:true
    },
    password:{
        type:String,
        required:true
    },
    bio:String,
    profileImage:{
        type:String,
        default:"https://ik.imagekit.io/v38ksauw1/download%20(5).jpg"
    }
})

const userModel = mongoose.model('user',userSchema);

module.exports = userModel;