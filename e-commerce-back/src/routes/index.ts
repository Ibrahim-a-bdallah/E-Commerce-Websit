// src/routes/index.ts
import { Router } from "express";
import authRoute from "./paymob/auth.route";
import orderRoutes from "./paymob/order.routes";
import paymentKeyRouter from "./paymob/payment-key.route";
import fullPaymentRoute from "./paymob/fullPayment.route";

const router = Router();

router.use("/paymob", authRoute);
router.use("/paymob", orderRoutes);
router.use("/paymob", paymentKeyRouter);
router.use("/paymob", fullPaymentRoute);

export default router;
