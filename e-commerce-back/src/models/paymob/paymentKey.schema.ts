import { z } from "zod";

export const paymentKeySchema = z.object({
  delivery_needed: z.boolean().default(false),
  items: z
    .array(
      z.object({
        name: z.string(),
        amount_cents: z.number().int().positive(),
        description: z.string(),
        quantity: z.number().int().positive(),
      })
    )
    .min(1),
  amount_cents: z
    .number({
      required_error: "Amount is required",
      invalid_type_error: "Amount must be a number",
    })
    .positive("Amount must be greater than 0"),

  billing_data: z.object({
    apartment: z.string().min(1),
    email: z.string().email(),
    floor: z.string().min(1),
    first_name: z.string().min(1),
    street: z.string().min(1),
    building: z.string().min(1),
    phone_number: z.string().min(10),
    shipping_method: z.string().min(1),
    postal_code: z.string().min(1),
    city: z.string().min(1),
    country: z.string().min(2),
    last_name: z.string().min(1),
    state: z.string().min(1),
  }),

  currency: z
    .string()
    .length(3, "Currency should be 3-letter ISO code (e.g., EGP, USD)"),

  expiration: z.number().optional().default(3600), // default 1 hour expiration if not passed
});

export type PaymentKeyRequestSchemaType = z.infer<typeof paymentKeySchema>;
