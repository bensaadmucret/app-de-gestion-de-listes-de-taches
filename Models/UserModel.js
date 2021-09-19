const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        min: 3,
        max: 20
    },
    email: {
        type: String,
        required: true,
        min: 3,
        max: 50
    },
    password: {
        type: String,
        required: true,
        min: 6,
        max: 20
    },
    dateCreated: {
        type: Date,
        default: Date.now
    }
});
