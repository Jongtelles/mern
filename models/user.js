const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new User({
    picture: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    zip: {
        type: String,
        required: true
    }
});

const User = mongoose.model("User", userSchema);

module.exports = User;