const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  id: Number,
  title: String,
  price: Number,
  cat_prefix: String,
  img: String,
  max: Number,
});

module.exports = mongoose.model("Product", productSchema);
