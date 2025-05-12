// src/schemas/paymob/auth.schema.ts
import { z } from "zod";

export const authSchema = z.object({
  apiKey: z.string().min(10, "API key is too short"),
});
