const mongoose = require('mongoose')
const blogSchema = new mongoose.Schema({

    user: {
        type: mongoose.Schema.ObjectId,
        ref: "User"
    },
    title: {
        type: String,
        maxLength: [50, "title Should not be more than 50 chars"],
        minLength: [2, "title should have atleast 2 chars"],
        required: true
    },
    tags: {
        type: String,
        maxLength: [50, "tags Should not be more than 50 chars"],
        minLength: [2, "tags should have atleast 2 chars"],
        required: true,
    },
    body: {
        type: String,
        maxLength: [5000, "body Should not be more than 500 chars"],
        minLength: [5, "body should have atleast 5 chars"],
        required: true,
    },
    like: {
        type: Number,
        default: 0,
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    modifiedAt: {
        type: Date,
        default: Date.now
    }

})

module.exports = mongoose.model("Blog", blogSchema)