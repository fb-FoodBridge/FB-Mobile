import { z } from "zod";

export const ZodRegisterSchema = z.object({
  username: z.string(),
  email: z.email("Email inválido"),
  password: z
    .string()
    .min(8, { message: "Senha com no mínimo 8 caracteres" })
    .refine(
      (val) => /[A-Z]/.test(val),
      "A senha deve conter pelo menos uma letra maiúscula"
    )
    .refine((val) => /\d/.test(val), "A senha deve conter pelo menos um número")
    .refine(
      (val) => /[!@#$%^&*()_+\-=[\]{}|;:'",.<>/?]/.test(val),
      "A senha deve conter pelo menos um caractere especial"
    ),
  cnpj: z.preprocess((input) => {
    if (typeof input === "string") {
       return input.replace(/[.\-/]/g, "");
    }
    return input;
  }, z.string()),
});

export const ZodLoginSchema = z.object({
  email: z.email("Email inválido"),
  password: z.string(),
});