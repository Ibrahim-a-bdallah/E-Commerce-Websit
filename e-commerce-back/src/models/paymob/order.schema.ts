import { z } from "zod";

export const createOrderSchema = z.object({
  delivery_needed: z.boolean().default(false),
  amount_cents: z.number().int().positive(),
  currency: z.string().optional().default("EGP"),
  merchant_order_id: z.string().min(1),
  items: z
    .array(
      z.object({
        name: z.string(),
        amount_cents: z.number().int().positive(),
        description: z.string(),
        quantity: z.number().int().positive(),
      })
    )
    .min(0),
});
