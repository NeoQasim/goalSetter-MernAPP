const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "please add the name "]
    },
    email: {
        type: String,
        required: [true, "please add an email address "],
        unique: true
    },
    password: {
        type: String,
        required: [true, "please add the name "],
    }

}, {
    timestamps: true
})

module.exports = mongoose.model("goalSetterUsers", userSchema)