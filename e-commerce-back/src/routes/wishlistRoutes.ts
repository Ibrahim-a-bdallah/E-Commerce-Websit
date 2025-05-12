import express from "express";
const router = express.Router();
import Wishlist from "../models/wishlist";

router.get("/", async (req, res) => {
  try {
    const { userId, productId } = req.query;
    if (userId && productId) {
      const wishlist = await Wishlist.findOne({ userId, productId });

      res.json(wishlist);
    } else if (userId) {
      const wishlist = await Wishlist.find({ userId });
      res.json(wishlist);
    } else {
      const wishlist = await Wishlist.find();
      res.json(wishlist);
    }
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.post("/", async (req, res) => {
  try {
    const { userId, productId } = req.body;
    const wishlist = new Wishlist({ userId, productId });
    await wishlist.save();
    res.json(wishlist);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error, please try again later" });
  }
});

router.delete("/", async (req, res) => {
  try {
    const { id } = req.query;
    await Wishlist.findByIdAndDelete(id);
    res.json({ message: "Wishlist item deleted successfully" });
  } catch (error) {
    console.error(error);
  }
});

export default router;
