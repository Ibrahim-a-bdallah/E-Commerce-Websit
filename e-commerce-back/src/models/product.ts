import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  // _id: String,
  title: String,
  price: Number,
  cat_prefix: String,
  img: String,
  max: Number,
});

export default mongoose.model("Product", productSchema);
