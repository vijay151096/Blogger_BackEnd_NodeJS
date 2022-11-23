const express = require('express')
const router = express.Router();
const User = require("../model/user")
const userController = require("../controller/userController")
const advancedResult = require("../middleware/advancedResult")

const blogRouter = require('../routes/blogRoute')
router.use('/:userId/blog', blogRouter)

router.route('/')
    .get(advancedResult(User), userController.getUser)

router.route('/:userId')
    .put(userController.updateUser)
    .delete(userController.deleteUser)


module.exports = router;