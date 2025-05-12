import express from "express";
const router = express.Router();
import Product from "../models/product";

router.get("/", async (req: any, res: any) => {
  try {
    const { _id, cat_prefix } = req.query;
    let products;

    if (_id) {
      if (_id.length > 1) {
        products = await Product.find({
          _id: { $in: _id },
        });
      } else {
        products = await Product.findById(_id);
      }
    }

    if (cat_prefix) {
      products = await Product.find({ cat_prefix });
    }

    // if (!products.length) {
    //   return res.status(404).json({ msg: "No products found" });
    // }

    res.json(products);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router;
