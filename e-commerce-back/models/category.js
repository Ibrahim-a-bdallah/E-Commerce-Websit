const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
  id: Number,
  title: String,
  prefix: String,
  img: String,
});

module.exports = mongoose.model("Category", categorySchema);
