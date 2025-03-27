const express = require("express");
const router = express.Router();
const Product = require("../models/product");

router.get("/", async (req, res) => {
  try {
    const { prifixIds } = req.query; // استخراج prifixIds من الاستعلام
    const products = await Product.find({
      prefixIds: {
        $in: prifixIds.split(","),
      },
    });

    res.json(products);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
