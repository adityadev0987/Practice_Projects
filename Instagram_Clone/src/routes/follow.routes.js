const express = require('express');
const identifyUser = require('../middelwares/auth.middelware');
const { followUserController, UnfollowUserController, pendingStatusController, acceptFollowRequestController } = require('../controllers/follow.controller');
const followRouter = express.Router();

followRouter.post('/follow/:username',identifyUser,followUserController);
followRouter.post('/unfollow/:username',identifyUser,UnfollowUserController);
followRouter.get('/follow/status',identifyUser,pendingStatusController);
followRouter.patch('/follow/status/:username',identifyUser,acceptFollowRequestController)

module.exports = followRouter