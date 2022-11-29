const mongoose = require('mongoose')
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema( {

    name: {
        type: String,
        maxLength: [50, "Name Should not be more than 50 chars"],
        minLength: [2, "Name should have atleast 2 chars"],
        required: true
    },
    userName: {
        type: String,
        maxLength: [50, "Name Should not be more than 50 chars"],
        minLength: [2, "Name should have atleast 2 chars"],
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: [true, "Email Cannot be empty"],
        unique: true
    },
    password: {
        type: String,
        required: [true, "Password Cannot be empty"],
        select: false
    },
    role: {
        type: String,
        enum: [
            "user", "admin"
        ],
        default: "user"
    },
    phone: String,
    website: String,
    followers: {
        type: Number,
        default: 0
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

userSchema.pre("save", function(next){
    if(this.password) {
        const salt = bcrypt.genSaltSync(10)
        this.password = bcrypt.hashSync(this.password, salt)
    }
    this.modifiedAt = Date.now()
    next();
})

userSchema.methods.matchPassword = async function(enteredPassword){
    return await bcrypt.compareSync(enteredPassword, this.password)
}

module.exports = mongoose.model("User", userSchema)