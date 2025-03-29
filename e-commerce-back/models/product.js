const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  // _id: String,
  title: String,
  price: Number,
  cat_prefix: String,
  img: String,
  max: Number,
});

module.exports = mongoose.model("Product", productSchema);
