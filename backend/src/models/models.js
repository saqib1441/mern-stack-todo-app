import mongoose, { Schema } from "mongoose";

// Schema
const TodoSchema = new Schema(
  {
    task: {
      type: String,
      required: true,
      trim: true,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

const Todo = mongoose.model("todos", TodoSchema);

export default Todo;
