import { z } from "zod"
import type { ZodLoginSchema, ZodRegisterSchema } from "./ZodValidationSchema"

export type ZodLoginTypes = z.infer<typeof ZodLoginSchema>
export type ZodRegisterTypes = z.infer<typeof ZodRegisterSchema>