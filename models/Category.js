const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CategorySchema = new Schema({
    title: {
        type: String,
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    progress: {
        type: Number,
        min: 0,
        max: 100,
        required: true,
        default: 0
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "users"
    },
    actual: {
        type: Date,
        required: true,
        default: new Date("January 1, 2020 00:00:00")
    },
    expected: {
        type: Date,
        required: true,
        default: new Date("January 1, 2020 00:00:00")
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