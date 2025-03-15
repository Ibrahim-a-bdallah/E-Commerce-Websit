import { z } from "zod";

const singInSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1, { message: "Password is required" }),
});

type SingInType = z.infer<typeof singInSchema>;

export { singInSchema, type SingInType };
