export interface OrderPayload {
  delivery_needed: boolean;
  amount_cents: number;
  currency?: string;
  merchant_order_id: string;
  items: {
    name: string;
    amount_cents: number;
    description: string;
    quantity: number;
  }[];
}
