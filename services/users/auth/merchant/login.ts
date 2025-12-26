import { ZodLoginSchema } from "validations/ZodValidationSchema";
import type { ZodLoginTypes } from "../../../../validations/ZodValidationsTypes";
import { api } from "../../../base_url";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ZodValidate } from "utils/zodValidationUtil";

interface LoginResponse {
  access_token: string;
  refresh_token: string;
}

export async function LoginMerchant(credentials: ZodLoginTypes) {
  const validate = ZodValidate(ZodLoginSchema, credentials);
  try {
    const res = await fetch(`${api}/merchant/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: validate.data?.email,
        password: validate.data?.password,
      }),
    });

    
    const json: LoginResponse | any = await res.json();

    if (res.status === 400 || res.status === 401) {
      return {
        success: false,
        error: "Email ou senha inválido",
      };
    }

    if (!res.ok) {
      return {
        success: false,
        error: json?.error || "Erro interno no servidor.",
      };
    }


    await AsyncStorage.setItem("token", json.access_token);

    return {
      success: true,
      message: "Login realizado com sucesso.",
      data: json,
    };

  } catch (e) {
    console.log("Erro no LoginMerchant:", e);
    return {
      success: false,
      error: "Erro ao conectar ao servidor.",
    };
  }
}
