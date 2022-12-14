const express = require('express')
const router = express.Router();
const User = require("../model/user")
const userController = require("../controller/userController")
const advancedResult = require("../middleware/advancedResult")
const authorization = require('../middleware/authorization')


const blogRouter = require('../routes/blogRoute')
router.use('/:userId/blog', blogRouter)

router.route('/')
    .get(advancedResult(User), userController.getUser)

// Authenticate all below endpoints
const authenticate = require('../middleware/authenticate')
router.route("/me")
    .get(authenticate, userController.getCurrentUser)

router.route('/:userId')
    .put( userController.updateUser)
    .delete(authorization, userController.deleteUser)
    .get(userController.getUserById)


module.exports = router;