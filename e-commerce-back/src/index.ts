import dotenv from "dotenv";
import express from "express";
import connectDB from "./utils/db";
import cors from "cors";
import authController from "./controllers/sign.Controller";
import categoryRoutes from "./routes/categoryRoutes";
import productRoutes from "./routes/productRoutes";
import wishlistRoutes from "./routes/wishlistRoutes";
import router from "./routes";

dotenv.config();

const app = express();

// الاتصال بـ MongoDB
connectDB();

app.use(cors());
app.use(express.json());
app.use("/", router);

// تعيين المسارات
app.use("/categories", categoryRoutes);
app.use("/products", productRoutes);
app.use("/wishlist", wishlistRoutes);
app.use("/users", authController);

export default app;
