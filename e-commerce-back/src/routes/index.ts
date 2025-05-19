// src/routes/index.ts
import { Router } from "express";
import authRoute from "./paymob/auth.route";
import orderRoutes from "./paymob/order.routes";
import paymentKeyRouter from "./paymob/payment-key.route";

const router = Router();

router.use("/paymob", authRoute);
router.use("/paymob", orderRoutes);
router.use("/paymob", paymentKeyRouter);

export default router;
