const mongoose = require('mongoose')
const User = require('../model/user')
const asyncHandler = require('../middleware/asyncHandler')
const userController = [];

userController.getUser = asyncHandler(async(req, res, next) => {
    res.status(200).json(res.advancedResult)
})

userController.updateUser = asyncHandler(async(req, res, next) => {
    const users = await User.findByIdAndUpdate(req.params.userId, req.body, {
        runValidators: true,
        new: true
    });
    res.status(200).send({
        success: true,
        message: "User Updated Successfully",
        data: users
    })
})

userController.getUserById = asyncHandler(async(req, res, next) => {
    const users = await User.findById(req.params.userId)
    res.status(200).send({
        success: true,
        message: "User Details",
        data: users
    })
})

userController.deleteUser = asyncHandler(async(req, res, next) => {
    await User.findByIdAndDelete(req.params.userId)
    res.status(200).send({
        success: true,
        message: "User Deleted Successfully"
    })
})

module.exports = userController;