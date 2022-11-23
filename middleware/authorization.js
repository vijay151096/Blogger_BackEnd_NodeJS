const asyncHandler = require('./asyncHandler')
const User = require('../model/user')
const authorization = asyncHandler( async(req, res, next) => {

    const loggedInUser = req.loggedInUser;
    const loggedInUserId = loggedInUser.id
    const loggedInUserRole = loggedInUser.role;

    const reqUserId = req.params.userId || req.body.user
    const reqUser = User.findById(reqUserId);

    if("admin" !== loggedInUserRole && loggedInUserId !== reqUserId){
        return res.status(403).send({
            success: false,
            error: "Permission Needed",
            message: "User Doesn't have the permission to access the resources.",
            path: req.path
        })
    }
    next()

})

module.exports = authorization