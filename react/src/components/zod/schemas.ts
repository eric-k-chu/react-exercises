import { z } from "zod";

export const schema = z.object({
  username: z.string(),
  password: z
    .string()
    .refine((val) => val.length >= 8, {
      message: "Password must be at least 8 characters long",
    })
    .refine(
      (val) => {
        const specialChars = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];
        return specialChars.some((char) => val.includes(char));
      },
      {
        message: "Password must contain a special character !@#$%^&*()",
      },
    ),
});

export type LoginForm = z.infer<typeof schema>;
