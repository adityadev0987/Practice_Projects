const express = require('express');
const identifyUser = require('../middelwares/auth.middelware');
const { followUserController, UnfollowUserController, pendingStatusController, acceptFollowRequestController, rejectFollowRequestController, statusdetailsController } = require('../controllers/follow.controller');
const followRouter = express.Router();

followRouter.post('/follow/:username',identifyUser,followUserController);
followRouter.post('/unfollow/:username',identifyUser,UnfollowUserController);
followRouter.get('/follow/status',identifyUser,statusdetailsController);
followRouter.patch('/follow/status/accept/:username',identifyUser,acceptFollowRequestController);
followRouter.patch('/follow/status/reject/:username',identifyUser,rejectFollowRequestController);

module.exports = followRouter