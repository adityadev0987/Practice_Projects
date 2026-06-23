const express = require('express');
const postRouter = express.Router();
const postController = require('../controllers/post.controller')
const multer = require('multer') // package for using imageKit
const upload = multer({storage:multer.memoryStorage()}); // used to store files in RAM 
const identifyUser = require('../middelwares/auth.middelware');

postRouter.post('/', upload.single('image'),identifyUser ,postController.createPostController);
postRouter.get('/',identifyUser,postController.getPostController);
postRouter.get('/details/:postId',identifyUser,postController.getPostDetailsController);
postRouter.post('/likes/:postId',identifyUser,postController.likeDetailsController);
postRouter.get('/feed',identifyUser,postController.getFeedController);



module.exports = postRouter