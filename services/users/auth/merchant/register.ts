import { api } from "../../../base_url";
import { ZodValidate } from "../../../../utils/zodValidationUtil";
import { ZodRegisterSchema } from "../../../../validations/ZodValidationSchema";
import type { ZodRegisterTypes } from "../../../../validations/ZodValidationsTypes";

interface zodData {
  status: number;
  message: string;
}

export async function RegisterMerchant(data: ZodRegisterTypes) {
  const validate = ZodValidate(ZodRegisterSchema, data);
  if (validate.success !== true) {
    return {
      success: false,
      fields: validate.fields,
    };
  }
 const username = `${validate.data?.firstName} ${validate.data?.lastName}`;
  const response = await fetch(`${api}/merchant`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      cnpj: validate.data?.cnpj,
      email: validate.data?.email,
      password: validate.data?.password,
      username: username,
    }),
  })
    .then(async (res) => {
      const json: zodData = await res.json();
      if (res.status === 401) {
        return Promise.reject({ success: false, error: "CNPJ inválido" });
      }

      if (res.status === 400) {
        return Promise.reject({ success: false, error: json.message });
      }
      if (res.status === 409) {
        if (json.message === "Email already exists") {
          return Promise.reject({ success: false, error: "Email já existe" });
        } else if (json.message === "CNPJ already exists") {
          return Promise.reject({ success: false, error: "CNPJ já existe" });
        } else {
          return Promise.reject({ success: false, error: json.message });
        }
      }

      return {
        success: true,
        message: "Comerciante criado com sucesso",
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