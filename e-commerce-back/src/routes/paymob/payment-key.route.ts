import { Router } from "express";
import { validateRequest } from "../../middlewares/validate";
import { paymentKeySchema } from "../../models/paymob/paymentKey.schema";
import { getPaymentKey } from "../../controllers/paymob/payment-key.controller";

const router = Router();

// POST /api/paymob/payment-key
router.post("/payment-key", validateRequest(paymentKeySchema), getPaymentKey);

export default router;
