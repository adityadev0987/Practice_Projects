const followModel = require('../models/follow.model');
const userModel = require('../models/user.model');

async function followUserController(req,res){
    // getting username of follower and followee

    const followerUsername = req.user.username;
    const followeeUsername = req.params.username;

    const isFolloweeExist = await userModel.findOne({
        username:followeeUsername
    })
    if(!isFolloweeExist){
        return res.status(400).json({
            message:"Person you trying to follow not exist"
        })
    }

    const isAlreadyFollowing = await followModel.findOne({
        follower:followerUsername,
        followee:followeeUsername
    })
    if(isAlreadyFollowing){
        return res.status(400).json({
            message:`You already following ${followeeUsername}`
        })
    }

    if(followerUsername == followeeUsername){
        return res.status(400).json({
            message:"You are trying to follow yourself which is not possible"
        })
    }


    const followRecord = await followModel.create({
        follower:followerUsername,
        followee:followeeUsername,
        status:'pending'
    })
    res.status(201).json({
        message:`You started following ${followeeUsername}`,
        follow:followRecord
    })
    

}

async function UnfollowUserController(req,res){
    
    const followerUsername = req.user.username
    const followeeUsername = req.params.username

    const isUserFollowing= await followModel.findOne({
        follower:followerUsername,
        followee:followeeUsername
    })
    
    if(!isUserFollowing){
        return res.status(200).json({
            message:`${followerUsername} are not following ${followeeUsername}`
        })
    }

    await followModel.findByIdAndDelete(isUserFollowing._id);

    res.status(200).json({
        message:`You unfollowed ${followeeUsername}`,
    })
}

async function pendingStatusController(req,res){
    const user = req.user.username
    const statusRecord = await followModel.find({
        followee:user,
        status:'pending'
    })
    res.status(200).json({
        message:"Your pending request",
        statusRecord
    })
}

async function acceptFollowRequestController(req,res){

    const followerUsername = req.params.username;
    const followeeUsername = req.user.username;

    const isUserFollowed = await followModel.findOne({
        follower:followerUsername,
        followee:followeeUsername
    })
    if(!isUserFollowed){
        return res.status(400).json({
            message:`You are not followed by ${followerUsername}`
        })
    }

    const isStatusAlreadyAcceptReject = await followModel.findOne({
        follower:followerUsername,
        followee:followeeUsername,
        status:{
            $in:[
                'accepted','rejected'
            ]
        }
    })

    if(isStatusAlreadyAcceptReject){
        return res.status(400).json({
            message:`You already accept or reject the  ${followerUsername}`
        })
    }

    const StatusRecord = await followModel.findOneAndUpdate(
        {follower:followerUsername,followee:followeeUsername,status:'pending'} ,{status:'accepted'}
    )
    res.status(200).json({
        message:`You accepted the follow request of ${followerUsername}`
    })
}

module.exports = {
    followUserController,
    UnfollowUserController,
    pendingStatusController,
    acceptFollowRequestController
}