import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
  id: Number,
  title: String,
  prefix: String,
  img: String,
});

export default mongoose.model("Category", categorySchema);
