const jwt = require('jsonwebtoken');

async function identifyUser(req,res,next){
    // getting token
    const token = req.cookies.token;
    // if token not found returning request
    if(!token){
        return res.status(401).json({
            message:"You dont have a valid token"
        })
    }
    // cheking token is not tampered
    let checkToken = null;
    try{
        checkToken = jwt.verify(token,process.env.JWT_SECRET);
    }
    catch(err){
        return res.status(401).json({
            message:"Token is not Valid"
        })
    }

    req.user = checkToken;
    next()
}

module.exports = identifyUser