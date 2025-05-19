import dotenv from "dotenv";
import express from "express";
import connectDB from "./src/utils/db";
import cors from "cors";
import authController from "./src/controllers/sign.Controller";
import categoryRoutes from "./src/routes/categoryRoutes";
import productRoutes from "./src/routes/productRoutes";
import wishlistRoutes from "./src/routes/wishlistRoutes";
import router from "./src/routes";

dotenv.config();

const app = express();

// الاتصال بـ MongoDB
connectDB();

app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
  })
);
app.use(express.json());
app.use("/", router);

// تعيين المسارات
app.use("/categories", categoryRoutes);
app.use("/products", productRoutes);
app.use("/wishlist", wishlistRoutes);
app.use("/users", authController);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export default app;
