const express = require('express');
const authController = require('../controllers/auth.controller');

const authRouter = express.Router();

//Register api
authRouter.post('/register',authController.registerApi);
authRouter.post('/login',authController.loginApi);

module.exports = authRouter;