const dataController = []
const asyncHandler = require('../middleware/asyncHandler')
const fs = require("fs");
const User = require("../model/user");
const Blog = require("../model/blog");
const Comment = require("../model/comment");

dataController.importData = asyncHandler(async(req, res, next) => {
    const usersData = fs.readFileSync("./data/users.json");
    let usersJson = JSON.parse(usersData.toString());
    await User.create(usersJson)

    const blogsData = fs.readFileSync("./data/blogs.json");
    let blogsJson = JSON.parse(blogsData.toString());
    await Blog.create(blogsJson)

    const commentsData = fs.readFileSync("./data/comments.json");
    let commentsJson = JSON.parse(commentsData.toString());
    await Comment.create(commentsJson)


    res.status(200).send({
        success: true,
        message: "Imported Successfully"
    })
})

dataController.cleanData = asyncHandler(async(req, res, next) => {
    await User.deleteMany()
    await Blog.deleteMany()
    await Comment.deleteMany()
    res.status(200).send({
        success: true,
        message: "Cleaned Successfully"
    })
})

module.exports = dataController;