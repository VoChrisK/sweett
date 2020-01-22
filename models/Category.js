const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CategorySchema = new Schema({
    title: {
        type: String,
        required: true
    },
    progress: {
        type: Number,
        min: 0,
        max: 100,
        required: true,
        default: 0
    },
    actual: {
        type: Number,
        required: true,
        default: 0
    },
    expected: {
        type: Number,
        required: true,
        default: 0
    },
    important: {
        type: Boolean,
        required: true,
        default: false
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const Category = mongoose.model("categories", CategorySchema);
module.exports = Category;