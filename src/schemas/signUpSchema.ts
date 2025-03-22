import { z } from "zod";

export const signUpSchema = z.object({
  username: z
    .string()
    .min(2, "Username must be at least 2 characters")
    .max(10, "Username must be no more 10 characters")
    .regex(/^[a-zA-Z0-9]+$/, "Username can't contain special character"),

  email: z.string().email(),
  password: z.string().min(6, "Password must be at least 6 characters"),
});
