const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AttemptSchema = new Schema({
    time: {
        type: Number,
        required: true,
        default: 0
    },
    question_id: {
        type: Schema.Types.ObjectId,
        ref: 'questions',
        required: true
    },
    category_id: {
        type: Schema.Types.ObjectId,
        ref: 'categories',
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const Attempt = mongoose.model("attempts", AttemptSchema);
module.exports = Attempt;