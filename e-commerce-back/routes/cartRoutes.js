const express = require("express");
const router = express.Router();
const Product = require("../models/product");

router.get("/", async (req, res) => {
  try {
    const { prifixIds } = req.query; // استخراج prifixIds من الاستعلام
    let products;

    if (cat_prefix) {
      // جلب المنتجات التي تطابق prifixIds
      products = await Product.find({ prifixIds });
    } else {
      // جلب جميع المنتجات إذا لم يتم تحديد prifixIds
      products = await Product.find();
    }

    res.json(products);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
