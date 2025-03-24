const express = require("express");
const router = express.Router();
const Wishlist = require("../models/wishlist");

router.get("/", async (req, res) => {
  try {
    const wishlist = await Wishlist.find();
    res.json(wishlist);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
