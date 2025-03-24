const mongoose = require("mongoose");

const wishlistSchema = new mongoose.Schema({
  userId: Number,
  productId: Number,
  id: Number,
});

module.exports = mongoose.model("Wishlist", wishlistSchema);
