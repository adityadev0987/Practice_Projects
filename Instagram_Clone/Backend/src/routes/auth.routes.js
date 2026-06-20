const express = require('express');
const authController = require('../controllers/auth.controller');
const identifyUser = require('../middelwares/auth.middelware');

const authRouter = express.Router();

//Register api
authRouter.post('/register',authController.registerApi);
authRouter.post('/login',authController.loginApi);
authRouter.get('/get-me',identifyUser,authController.getMeApi);


module.exports = authRouter;