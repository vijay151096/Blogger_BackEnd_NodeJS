const mongoose = require('mongoose')
const commentSchema = new mongoose.Schema({

    user: {
        type: mongoose.Schema.ObjectId,
        ref: "User"
    },
    blog: {
        type: mongoose.Schema.ObjectId,
        ref: "Blog"
    },
    rating: {
        type: Number,
        max: [10, "title Should not be more than 50 chars"],
        min: [0, "title should have atleast 2 chars"],
        required: true
    },
    body: {
        type: String,
        maxLength: [500, "body Should not be more than 500 chars"],
        minLength: [5, "body should have atleast 5 chars"],
        required: true,
    }

})

module.exports = mongoose.model("Comment", commentSchema)