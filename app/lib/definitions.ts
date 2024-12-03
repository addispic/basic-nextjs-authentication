import { z } from "zod";

// signup form schema
export const SignupFormSchema = z.object({
  email: z.string().email({ message: "Invalid email address." }).trim(),
  password: z
    .string()
    .min(3, { message: "Password must be at least 3 characters." })
    .regex(/[a-zA-Z]/, {
      message: "Password must contain at least 1 letter.",
    })
    .regex(/[0-9]/, { message: "Password must contain at least 1 digit." })
    .regex(/[^a-zA-Z0-9]/, {
      message: "password must contain at least 1 special character.",
    })
    .trim(),
});
