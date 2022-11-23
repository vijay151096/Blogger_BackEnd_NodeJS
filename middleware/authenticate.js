const authController = require("../controller/authController")
const dotenv = require('dotenv')
dotenv.config({path: './config/config.env'})
const User = require('../model/user')
const asyncHandler = require('../middleware/asyncHandler')

const authenticate = asyncHandler(async(req, res, next) => {
    if(!req.headers.authorization || !req.headers.authorization.startsWith("Bearer")){
        return res.status(401).send({
            success: false,
            message: "Invalid Bearer Token"
        }).end()
    }
    let token = req.headers.authorization.split(" ")[1]
    let payload = await authController.getDecodedJWTToken(token)
    let user = await User.findById(payload.id)
    if(!user){
        return res.status(401).send({
            success: false,
            message: "Invalid Bearer Token"
        }).end()
    }
    req.loggedInUser = user
    next()
})

module.exports = authenticate