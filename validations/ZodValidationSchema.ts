import { string, z } from "zod";

export const ZodRegisterSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  confirmPassword: z.string(),
  email: z.string().email("Email inválido"),
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

export const ZodForgotPasswordSchema = z.object({
  email: z.string().email("Email inválido"),
});

export const ZodCodeSchema = z.object({
  code: z.string().max(4, "Código inválido").min(4, "Código inválido"),
});

export const ZodNewPasswordSchema = z.object({
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
  newPassword: z
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
});

export const ZodDonationSchema = z.object({
  ngo_id: z.uuid(),
  products: z.array(
    z.object({
      name: z.string().min(3, "O nome do alimento é obrigatório"),
      validity: z.string().min(1, "A validade é obrigatória"),
      quantity: z
        .number()
        .min(1, "A quantidade deve ser pelo menos 1")
        .max(10, "A quantidade máxima é 10"),
    })
  ),
});

export const ZodValidateEmailSchema = z.object({
  email: z.email("Email inválido"),
  error: z.string().optional()
})
