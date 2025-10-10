import { z } from "zod";

export const registerFormSchema = z
  .object({
    fullname: z.string().min(1, "Full name is required"),
    email: z.email("Invalid email address"),
    password: z
      .string()
      .min(8, "Password must be at least 8 characters long")
      .max(25, "Password must be at most 25 characters long"),
    confirmPassword: z
      .string()
      .min(8, "Password must be at least 8 characters long")
      .max(25, "Password must be at most 25 characters long"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords confirmation does not match",
    path: ["confirmPassword"],
  });

export type RegisterFormSchema = z.infer<typeof registerFormSchema>;
