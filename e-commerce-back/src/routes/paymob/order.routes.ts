import express from "express";
import { createOrderSchema } from "../../models/paymob/order.schema";
import { validateRequest } from "../../middlewares/validate";
import { createOrder } from "../../services/paymob/order.service";

const router = express.Router();

// POST /api/orders
router.post("/orders", validateRequest(createOrderSchema), createOrder);

export default router;
