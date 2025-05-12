// src/controllers/paymob/fullPayment.controller.ts

import { Request, Response, NextFunction } from "express";
import { paymentKeySchema } from "../../models/paymob/paymentKey.schema";
import { handleFullPaymentFlow } from "../../services/paymob/fullPayment.service";

export const generateFullPaymentToken = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const validatedData = paymentKeySchema
      .omit({ integration_id: true })
      .parse(req.body);
    const result = await handleFullPaymentFlow(validatedData);
    res.json(result);
  } catch (err) {
    next(err);
  }
};
