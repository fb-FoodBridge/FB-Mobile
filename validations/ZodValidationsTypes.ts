import { z } from "zod"
import type { ZodCodeSchema, ZodForgotPasswordSchema, ZodLoginSchema, ZodNewPasswordSchema, ZodRegisterSchema } from "./ZodValidationSchema"

export type ZodLoginTypes = z.infer<typeof ZodLoginSchema>
export type ZodRegisterTypes = z.infer<typeof ZodRegisterSchema>
export type ZodForgotPasswordTypes = z.infer<typeof ZodForgotPasswordSchema>
export type ZodCodeTypes = z.infer<typeof ZodCodeSchema>
export type ZodNewPasswordTypes = z.infer<typeof ZodNewPasswordSchema>