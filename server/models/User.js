const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        unique: true
    },
    avatar: {
        type: String
    },
    date: {
        type: Date, 
        default: Date.now
    }
})
const User = mongoose.model('user', UserSchema);

module.exports = User;