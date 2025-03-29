const express = require("express");
const router = express.Router();
const Wishlist = require("../models/wishlist");

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

// router.post("/", async (req, res) => {
//   try {
//     const { userId, productId } = req.body;

//     if (!userId || !productId) {
//       return res
//         .status(400)
//         .json({ msg: "User ID and Product ID are required" });
//     }

//     const userExists = await User.findById(userId);
//     if (!userExists) {
//       return res.status(404).json({ msg: "User not found" });
//     }

//     const productExists = await Product.findById(productId);
//     if (!productExists) {
//       return res.status(404).json({ msg: "Product not found" });
//     }

//     // البحث عن قائمة الرغبات للمستخدم
//     let wishlist = await Wishlist.findOne({ userId });

//     if (wishlist) {
//       // التحقق من عدم تكرار المنتج
//       if (wishlist.products.some((p) => p.productId.toString() === productId)) {
//         return res.status(400).json({ msg: "Product already in wishlist" });
//       }
//       // إضافة المنتج إلى المصفوفة
//       wishlist.products.push({ productId });
//       await wishlist.save();
//     } else {
//       // إنشاء قائمة رغبات جديدة إذا لم تكن موجودة
//       wishlist = new Wishlist({
//         userId,
//         products: [{ productId }],
//       });
//       await wishlist.save();
//     }

//     res.status(201).json({
//       wishlist,
//       msg: "Product added to wishlist successfully",
//     });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Server error, please try again later" });
//   }
// });

module.exports = router;
