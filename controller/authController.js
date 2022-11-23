const User = require('../model/user')
const asyncHandler = require('../middleware/asyncHandler')
const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')
dotenv.config({path: './config/config.env'})
const authController = [];

authController.login = asyncHandler(async(req, res, next) => {
    const loggedInUser = await User.findOne({email: req.body.email}).select("+password");
    let isValidUser = await loggedInUser.matchPassword(req.body.password);
    if(isValidUser){
        res.status(200).send({
            success: true,
            message: "Logged In Successfully",
            data: {
                id: loggedInUser.id,
                token: await authController.generateJWTToken(loggedInUser.id)
            }
        })
    } else {
        res.status(401).send({
            success: false,
            message: "Invalid Credentials"
        })
    }

})

authController.updateCredentials = asyncHandler(async(req, res, next) => {
    const reqUser = await User.findOne({email: req.body.email}).select("+password");
    const isValidUser = await reqUser.matchPassword(req.body.oldPassword)
    if(!isValidUser){
        return res.status(401).send({
            success: false,
            message: "Invalid Credentials"
        }).end()
    }
    reqUser.password = req.body.password
    const user = await reqUser.save()
    res.status(200).send({
        success: true,
        message: "User Updated Successfully",
        data: user
    })
})

authController.register = asyncHandler(async(req, res, next) => {
    const users = await User.create(req.body);
    res.status(201).send({
        success: true,
        message: "User Registered Successfully",
        data: {
            id: users.id,
            token: await authController.generateJWTToken(users.id)
        }
    })
})

authController.generateJWTToken = asyncHandler(async(id) => {
    let token = await jwt.sign({id}, process.env.JWT_SECRET_KEY)
    return token
})

authController.getDecodedJWTToken = asyncHandler(async(token) => {
    let decodedPayload = await jwt.verify(token, process.env.JWT_SECRET_KEY)
    return decodedPayload
})

module.exports = authController;