const express = require("express");
const router = express.Router();
const Product = require("../models/product");

// جلب جميع المنتجات أو منتجات محددة بناءً على cat_prefix
router.get("/", async (req, res) => {
  try {
    const { cat_prefix } = req.query; // استخراج cat_prefix من الاستعلام
    let products;

    if (cat_prefix) {
      // جلب المنتجات التي تطابق cat_prefix
      products = await Product.find({ cat_prefix });
    } else {
      // جلب جميع المنتجات إذا لم يتم تحديد cat_prefix
      products = await Product.find();
    }

    res.json(products);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
