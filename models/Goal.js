const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const GoalSchema = new Schema({
    description: {
        type: String,
        required: true
    },
    attempted: {
        type: Number,
        required: true,
        default: 0
    },
    expected: {
        type: Number,
        required: true,
        default: 0
    },
    addToTotal: {
        type: Boolean,
        required: true,
        default: false
    },
    date: {
        type: Date,
        default: Date.now
    },
    category_id: {
        type: Schema.Types.ObjectId,
        ref: 'categories',
        required: true
    }
});

const Goal = mongoose.model("goals", GoalSchema);
module.exports = Goal;