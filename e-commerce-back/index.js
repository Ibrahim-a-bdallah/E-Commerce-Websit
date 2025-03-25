const express = require("express");
const connectDB = require("./utils/db");
const cors = require("cors");
const userRoutes = require("./routes/userRoutes");
const categoryRoutes = require("./routes/categoryRoutes");
const productRoutes = require("./routes/productRoutes");
const wishlistRoutes = require("./routes/wishlistRoutes");

const app = express();

// الاتصال بـ MongoDB
connectDB();

app.use(cors());
app.use(express.json());

// تعيين المسارات
app.use("/api/users", userRoutes);
app.use("/api/categories", categoryRoutes);
app.use("/products", productRoutes);
app.use("/wishlist", wishlistRoutes);

// للاختبار المحلي
app.listen(process.env.PORT || 3001, () =>
  console.log("Server running on port 3001")
);

module.exports = app;
