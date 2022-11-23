const Blog = require('../model/blog')
const asyncHandler = require('../middleware/asyncHandler')
const blogController = [];

blogController.createBlog = asyncHandler(async(req, res, next) => {
    const blogs = await Blog.create(req.body);
    res.status(201).send({
        success: true,
        message: "Blog Created Successfully",
        data: blogs
    })
})

blogController.getBlog = asyncHandler(async(req, res, next) => {
    const blogs = await Blog.find(req.query)
    res.status(200).send({
        success: true,
        data: blogs
    })
})

blogController.getBlogById = asyncHandler(async(req, res, next) => {
    const blogs = await Blog.findById(req.params.blogId)
    res.status(200).send({
        success: true,
        data: blogs
    })
})

blogController.searchBlog = asyncHandler(async(req, res, next) => {
    res.status(200).json(res.advancedResult)
})

blogController.updateBlog = asyncHandler(async(req, res, next) => {
    const blogs = await Blog.findByIdAndUpdate(req.params.blogId, req.body, {
        runValidators: true,
        new: true
    });
    res.status(200).send({
        success: true,
        message: "Blog Updated Successfully",
        data: blogs
    })
})

blogController.deleteBlog = asyncHandler(async(req, res, next) => {
    await Blog.findByIdAndDelete(req.params.blogId)
    res.status(200).send({
        success: true,
        message: "Blog Deleted Successfully"
    })
})

module.exports = blogController;