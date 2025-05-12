import { PaymentKeyRequestSchemaType } from "../../models/paymob/paymentKey.schema";
import httpsAgent from "../../utils/httpsClient";

export const getPaymentKeyService = async (data: {
  order_id: any;
  integration_id: any;
  auth_token: any;
  amount_cents: any;
  expiration?: any;
  billing_data: any;
  currency: any;
  delivery_needed?: any;
  merchant_order_id?: any;
  items?: any;
}) => {
  console.log(`servecs data:${data}`);
  try {
    const response = await httpsAgent.post("/acceptance/payment_keys", {
      auth_token: data.auth_token,
      amount_cents: data.amount_cents,
      expiration: 3600,
      order_id: data.order_id,
      billing_data: data.billing_data,
      currency: data.currency,
      integration_id: data.integration_id,
      lock_order_when_paid: true,
    });

    return response.data;
  } catch (error: any) {
    throw new Error(
      `Paymob Payment Key Error: ${
        error.response?.data?.message || error.message
      }`
    );
  }
};
