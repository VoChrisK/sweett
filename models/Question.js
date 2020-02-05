const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const QuestionSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    category_id: {
        type: Schema.Types.ObjectId,
        // type: String,
        ref: 'categories',
        required: true
    },
    status: {
        type: String,
        required: true,
        default: 'Incomplete'
    },
    time: {
        type: Number,
        required: true,
        default: 45
    },
    section: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const Question = mongoose.model("questions", QuestionSchema);
module.exports = Question;