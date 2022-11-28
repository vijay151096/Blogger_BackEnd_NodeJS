const authController = require("../controller/authController")
const dotenv = require('dotenv')
dotenv.config({path: './config/config.env'})
const User = require('../model/user')
const asyncHandler = require('../middleware/asyncHandler')

const authenticate = asyncHandler(async(req, res, next) => {

    // console.log(`\nPath Url : ${req.path} `)
    // console.log(`\nReq Query : ${JSON.parse(req.query)} `)
    // console.log(`\nReq Params : ${JSON.parse(req.params)} `)
    // console.log(`\nReq Body : ${JSON.parse(req.body.toString())} `)

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