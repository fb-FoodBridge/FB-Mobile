import { api } from "services/base_url";
import { ZodValidate } from "utils/zodValidationUtil";
import AsyncStorage from "@react-native-async-storage/async-storage";
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



  try {
    const res = await fetch(`${api}/forgot-password`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: validate.data?.email,
      }),
    });

    const json = await res.json();

    if (res.status === 409) {
      return {
        success: false,
        error: json.error || "E-mail inválido",
      };
    }

    if (!res.ok) {
      return {
        success: false,
        error: json.error ||   "Erro interno no servidor",
      };
    }

    await AsyncStorage.setItem("userEmail", validate.data?.email ? validate.data?.email : "" );

    return {
      success: true,
      message: "Código enviado",
    };
  } catch (error) {
    return {
      success: false,
      error: "Erro de conexão com o servidor",
    };
  }
}
