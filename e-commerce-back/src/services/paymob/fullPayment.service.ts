// src/services/paymob/fullPayment.service.ts
import { config } from "../../config/env";
import { paymentKeySchema } from "../../models/paymob/paymentKey.schema";
import { z } from "zod";
import httpsClient from "../../utils/httpsClient";

const paymentRequestSchema = paymentKeySchema.omit({ integration_id: true });

export const handleFullPaymentFlow = async (
  data: z.infer<typeof paymentRequestSchema>
) => {
  // 1. Get Auth Token
  const authResponse = await httpsClient.post("/auth/tokens", {
    api_key: config.paymobApiKey,
  });

  const token = authResponse.data.token;

  // 2. Create Order
  const orderResponse = await httpsClient.post("/ecommerce/orders", {
    auth_token: token,
    delivery_needed: "false",
    amount_cents: data.amount_cents,
    currency: data.currency,
    items: [], // يمكنك تعبئته لاحقًا إن أردت
  });

  const orderId = orderResponse.data.id;

  // 3. Create Payment Key
  const paymentKeyResponse = await httpsClient.post(
    "/acceptance/payment_keys",
    {
      auth_token: token,
      amount_cents: data.amount_cents,
      expiration: data.expiration ?? 3600,
      order_id: orderId,
      billing_data: data.billing_data,
      currency: data.currency,
      integration_id: config.PAYMOB_INTEGRATION_ID,
    }
  );

  return {
    payment_token: paymentKeyResponse.data.token,
  };
};
