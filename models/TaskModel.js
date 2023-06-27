const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  task: {
    type: String,
    required: true,
  },
});
const RegisterSchema = new mongoose.model("taskSchema", taskSchema);
module.exports = RegisterSchema;
