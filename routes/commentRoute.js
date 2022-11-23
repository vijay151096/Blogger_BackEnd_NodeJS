const express = require("express")
const advancedResult = require("../middleware/advancedResult");
const filterUsersResult = require("../middleware/filterUsersResult")
const Comment = require("../model/comment");
const commentController = require("../controller/commentController");
const router = express.Router({mergeParams: true});

router.route('/')
    .post(filterUsersResult, commentController.createComment)
    .get(filterUsersResult, commentController.getComment)

router.route("/search")
    .get(advancedResult(Comment), commentController.searchComment)

router.route('/:commentId')
    .put(filterUsersResult, commentController.updateComment)
    .delete(filterUsersResult, commentController.deleteComment)
    .get(filterUsersResult, commentController.getCommentById)

module.exports = router;