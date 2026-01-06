import { api } from "services/base_url";
import { ZodValidate } from "utils/zodValidationUtil";
import { ZodValidateEmailSchema } from "validations/ZodValidationSchema";
import { ZodValidateEmailType } from "validations/ZodValidationsTypes";

export async function ForgotPassword(data: ZodValidateEmailType) {
  const validate = ZodValidate(ZodValidateEmailSchema, data);
  if (validate.success !== true) {
    return {
      success: false,
      fields: validate.fields,
    };
  }

  const response = await fetch(`${api}/forgot-password`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email: validate.data?.email,
    }),
  })
    .then(async (res) => {
      const json = await res.json();
      if (res.status === 409) {
        return {
          success: false,
          error: "Erro ao enviar código",
        };
        
      }
       if (!res.ok) {
      return {
        success: false,
        error: json?.error || "Erro interno no servidor.",
      };
    }
      console.log(res.status)

      return {
        success: true,
        message: "Código enviado",
        data: json,
      };
    })
    .catch((error) => {
      if (error && typeof error === "object" && "error" in error) {
        return { success: false, error: error.error };
      }
      return { success: false, error: error };
    });

    
  return response;
}
