const Comment = require('../model/comment')
const asyncHandler = require('../middleware/asyncHandler')
const commentController = [];

commentController.createComment = asyncHandler(async(req, res, next) => {
    const comments = await Comment.create(req.body);
    res.status(201).send({
        success: true,
        message: "Comment Created Successfully",
        data: comments
    })
})

commentController.getComment = asyncHandler(async(req, res, next) => {
    const comments = await Comment.find(req.query)
    res.status(200).send({
        success: true,
        data: comments
    })
})

commentController.getCommentById = asyncHandler(async(req, res, next) => {
    const comments = await Comment.findById(req.params.commentId)
    res.status(200).send({
        success: true,
        data: comments
    })
})

commentController.searchComment = asyncHandler(async(req, res, next) => {
    res.status(200).json(res.advancedResult)
})

commentController.updateComment = asyncHandler(async(req, res, next) => {
    const comments = await Comment.findByIdAndUpdate(req.params.commentId, req.body, {
        runValidators: true,
        new: true
    });
    res.status(200).send({
        success: true,
        message: "Comment Updated Successfully",
        data: comments
    })
})

commentController.deleteComment = asyncHandler(async(req, res, next) => {
    await Comment.findByIdAndDelete(req.params.commentId)
    res.status(200).send({
        success: true,
        message: "Comment Deleted Successfully"
    })
})

module.exports = commentController;