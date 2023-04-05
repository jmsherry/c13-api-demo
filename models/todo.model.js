const mongoose = require("mongoose");
const {
  Schema,
  // Schema: {
  //   Types: { ObjectId },
  // },
} = mongoose;

const TodoSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true }
});

const Todo = mongoose.model("Todo", TodoSchema);

module.exports = Todo;