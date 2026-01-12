import { api } from "services/base_url";
import { ZodValidate } from "utils/zodValidationUtil";
import { ZodNewPasswordSchema } from "validations/ZodValidationSchema";
import { ZodNewPasswordTypes } from "validations/ZodValidationsTypes";
import { getEmail } from "utils/storage/userStorage";

export async function UpdatePassword(data: ZodNewPasswordTypes) {
  const email = await getEmail();

  const validate = ZodValidate(ZodNewPasswordSchema, data);

  if (validate.success !== true) {
    return {
      success: false,
      fields: validate.fields,
    };
  }
  if (validate.data?.password !== validate.data?.newPassword) {
    return {
      success: false,
      error: "As senhas devem coincidirem",
    };
  }

  try {
    const response = await fetch(`${api}/forgot-password/update-password`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        password: validate.data?.newPassword,
        email: email,
      }),
    });
    
    if (response.status === 409) {
      return {
        success: false,
        error: "Email inválido",
      };
    }

    if (!response.ok) {
      return {
        success: false,
        error: "Erro interno no servidor",
      };
    }

    return {
      success: true,
      message: "Senha alterada com sucesso",
    };
  } catch (error) {
    return {
      success: false,
      error: "Erro de conexão com o servidor",
    };
  }
}
