const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// User schema
const UserSchema = new Schema({
    googleId: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    avatar: {
        type: String
    }
});

module.exports = mongoose.model('users', UserSchema);
