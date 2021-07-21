const jwt = require("jsonwebtoken");
const User = require("../model/userSchema");


const Authenticate = async (req,res,next) =>
{
    try {
        const token = req.cookies.jwttoken;
        const verifyToken = jwt.verify(token,process.env.SECRET_KEY);

        const userPresent = await User.findOne({_id: verifyToken._id, "tokens.token":token});

        if(!userPresent){
            throw new Error("User not found");
        }

        req.token = token;
        req.userPresent = userPresent;
        req.userID = userPresent._id;

        next();
        

    } catch (error) {
        res.status(401).send("Unauthorized: No tokens provided");
        console.log(error);
    }

}

module.exports = Authenticate;