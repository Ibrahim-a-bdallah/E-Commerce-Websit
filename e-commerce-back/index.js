const express = require("express");
const connectDB = require("./utils/db");
const userRoutes = require("./routes/userRoutes");
const categoryRoutes = require("./routes/categoryRoutes");
const productRoutes = require("./routes/productRoutes");
const wishlistRoutes = require("./routes/wishlistRoutes");

const app = express();

// الاتصال بـ MongoDB
connectDB();

app.use(express.json());

// تعيين المسارات
app.use("/users", userRoutes);
app.use("/categories", categoryRoutes);
app.use("/products", productRoutes);
app.use("/wishlist", wishlistRoutes);

// للاختبار المحلي
// app.listen(3000, () => console.log("Server running on port 3000"));

module.exports = app;
