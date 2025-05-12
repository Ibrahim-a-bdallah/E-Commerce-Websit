import { Request, Response, NextFunction } from "express";
import { z } from "zod";

import { paymentKeySchema } from "../../models/paymob/paymentKey.schema";
import { authenticateWithPaymob } from "../../services/paymob/auth.service";
import { createOrder } from "../../services/paymob/order.service";
import { getPaymentKeyService } from "../../services/paymob/payment-key.service";
import { config } from "../../config/env";

const paymentRequestSchema = paymentKeySchema;

export const getPaymentKey = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<any> => {
  console.log(` getPaymentKey: ${req.body}`);
  try {
    // ✅ 1. Validate request body
    const parsedData = paymentRequestSchema.parse(req.body);
    const merchant_order_id = `order-${Date.now()}`;

    // ✅ 2. Get Auth Token
    const token = await authenticateWithPaymob();

    const order_data = { ...parsedData, token, merchant_order_id };
    // ✅ 3. Create Order if not provided
    const orderId = (await createOrder(order_data)).orderId;

    // ✅ 4. Prepare final validated payload for payment key
    const validatedData = {
      ...parsedData,
      merchant_order_id: merchant_order_id,
      order_id: orderId,
      integration_id: Number(config.PAYMOB_INTEGRATION_ID),
      auth_token: token,
    };
    console.log(validatedData);
    // ✅ 5. Get payment key from Paymob
    const paymentKey = await getPaymentKeyService(validatedData);

    // ✅ 6. Return response
    return res.status(200).json({
      success: true,
      payment_key: paymentKey.token,
    });
  } catch (error) {
    next(error);
  }
};
