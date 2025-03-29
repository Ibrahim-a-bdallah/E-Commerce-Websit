require("dotenv").config(); // تحميل متغيرات البيئة من .envconst express = require("express");
const express = require("express");
const connectDB = require("./utils/db");
const cors = require("cors");
const authController = require("./controllers/authController");
const categoryRoutes = require("./routes/categoryRoutes");
const productRoutes = require("./routes/productRoutes");
const wishlistRoutes = require("./routes/wishlistRoutes");

const app = express();

// الاتصال بـ MongoDB
connectDB();

app.use(cors());
app.use(express.json());

// تعيين المسارات
app.use("/categories", categoryRoutes);
app.use("/products", productRoutes);
app.use("/wishlist", wishlistRoutes);
app.use("/users", authController);

app.listen(3000, () =>
  console.log(`Server running on ${process.env.PORT} PORT`)
);

module.exports = app;
