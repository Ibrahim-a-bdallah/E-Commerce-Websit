const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: String,
  password: String,
  firstName: String,
  lastName: String,
  id: Number,
});

module.exports = mongoose.model("User", userSchema);
