const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TaskSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  category_id: {
    type: Schema.Types.ObjectId,
    ref: "categories",
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  section: {
    type: String,
    required: true
  },
  status: {
    type: String,
    required: true,
    default: "Incomplete"
  }
});

const Task = mongoose.model("tasks", TaskSchema);
module.exports = Task;
