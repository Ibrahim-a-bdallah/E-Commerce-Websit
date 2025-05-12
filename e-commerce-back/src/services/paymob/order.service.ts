import { OrderPayload } from "../../types/order.types";
import { authenticateWithPaymob } from "./auth.service";
import httpsClient from "../../utils/httpsClient";

// ✅ Create Order on Paymob
export const createOrder = async (data: OrderPayload) => {
  try {
    console.log(`data.amount_cents:${data.amount_cents}`);
    const token = await authenticateWithPaymob();

    const orderResponse = await httpsClient.post(`/ecommerce/orders`, {
      auth_token: token,
      delivery_needed: data.delivery_needed,
      amount_cents: data.amount_cents,
      currency: data.currency || "EGP",
      merchant_order_id: data.merchant_order_id,
      items: data.items,
    });

    const { id: orderId } = orderResponse.data;

    return {
      orderId,
      ...orderResponse.data,
    };
  } catch (error: any) {
    console.error(
      "Failed to create order:",
      error.response?.data || error.message
    );
    throw new Error("Failed to create order");
  }
};
