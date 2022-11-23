const express = require("express")
const advancedResult = require("../middleware/advancedResult");
const filterUsersResult = require("../middleware/filterUsersResult")
const Blog = require("../model/blog");
const blogController = require("../controller/blogController");
const router = express.Router({mergeParams: true});

const commentRouter = require('../routes/commentRoute')
router.use("/:blogId/comment", commentRouter);

router.route('/')
    .post(filterUsersResult, blogController.createBlog)
    .get(filterUsersResult, blogController.getBlog)

router.route("/search")
    .get(advancedResult(Blog), blogController.searchBlog)

router.route('/:blogId')
    .put(filterUsersResult, blogController.updateBlog)
    .delete(filterUsersResult, blogController.deleteBlog)
    .get(filterUsersResult, blogController.getBlogById)

module.exports = router;