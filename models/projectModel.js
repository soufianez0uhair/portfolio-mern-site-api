const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const projectSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    github: {
        type: String,
        required: true
    },
    demo: {
        type: String,
        required: true
    },
    imgDesktop: {
        type: String,
        required: true
    },
    imgMobile: {
        type: String,
        required: true
    }
}, {timestamps: true});

module.exports = mongoose.model('Project', projectSchema);