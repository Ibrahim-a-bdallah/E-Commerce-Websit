// src/routes/paymob/fullPayment.route.ts

import { Router } from "express";
import { paymentKeySchema } from "../../models/paymob/paymentKey.schema";
import { generateFullPaymentToken } from "../../controllers/paymob/fullPayment.controller";
import { validateRequest } from "../../middlewares/validate";

const router = Router();

router.post(
  "/pay",
  validateRequest(paymentKeySchema.omit({ integration_id: true })),
  generateFullPaymentToken
);

export default router;
