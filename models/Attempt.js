const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AttemptSchema = new Schema({
    // Date.getHours, getMinutes, getSeconds to get 00:00:00
    // setInterval 1 second tick method when hitting start timer
    // tick will use 
    // Attempt.time.setSeconds( Attempt.time.getSeconds() + 1 )
    time: {
        type: Date,
        required: true,
        default: new Date("January 1, 2020 00:00:00")
    },
    question_id: {
        type: Schema.Types.ObjectId,
        ref: 'questions',
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const Attempt = mongoose.model("attempts", AttemptSchema);
module.exports = Attempt;