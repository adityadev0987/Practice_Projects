const express = require('express');
const identifyUser = require('../middelwares/auth.middelware');
const { followUserController, UnfollowUserController, acceptFollowRequestController, rejectFollowRequestController, followerStatusdetailsController, followingStatusController } = require('../controllers/follow.controller');
const followRouter = express.Router();

followRouter.post('/follow/:username',identifyUser,followUserController);
followRouter.post('/unfollow/:username',identifyUser,UnfollowUserController);
followRouter.get('/follower/status',identifyUser,followerStatusdetailsController);
followRouter.get('/following/status',identifyUser,followingStatusController);
followRouter.patch('/follow/status/accept/:username',identifyUser,acceptFollowRequestController);
followRouter.patch('/follow/status/reject/:username',identifyUser,rejectFollowRequestController);

module.exports = followRouter