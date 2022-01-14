const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Task = new Schema({
  name: { type: String },
  description: { type: String },
  image: { type: String },
  createAt: { type: String, default: Date.now },
  slug: { type: String },
});

module.exports = mongoose.model("Task", Task, "Task");
