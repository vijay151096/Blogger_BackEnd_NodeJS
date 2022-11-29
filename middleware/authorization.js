const asyncHandler = require('./asyncHandler')
const User = require('../model/user')
const authorization = asyncHandler( async(req, res, next) => {

    if( req.method === 'GET') {
        return next()
    }

    const loggedInUser = req.loggedInUser;
    const loggedInUserId = loggedInUser.id
    const loggedInUserRole = loggedInUser.role;

    let reqUserId = req.params.userId || req.body.user
    let reqUserEmail;
    if (!reqUserId) {
        reqUserEmail = req.body.email;
        if( !reqUserEmail ) {
            return next()
        }
        let reqUser = await User.findOne({email: reqUserEmail})
        reqUserId = reqUser.id;
    }
    if( !reqUserId ) {
        return next()
    }

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