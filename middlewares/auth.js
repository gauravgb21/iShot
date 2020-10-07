const jwt = require('jsonwebtoken');

const auth = async (req,res,next) => {
    const token = req.header('x-auth-token');
    if(!token)return res.status(401).json({ msg : "Authentication Token is Missing ! Access Denied !" });
    try{
        const decode = await jwt.verify(token,process.env.ACCESS_TOKEN_SECRET);
        req.user = decode.user;
        next();
    }
    catch(err){
        console.log("Error => ",err);
        return res.status(401).json({ msg : "Invalid Token !" });
    }
}

module.exports = auth;