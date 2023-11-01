const mongoose = require("mongoose");

const goalSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "goalSetterUsers"
    },
    text: {
        type: String,
        required: [true, "please enter the desired field"]
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('Goal', goalSchema)

