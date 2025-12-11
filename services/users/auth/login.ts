import type { ZodLoginTypes } from "../../../validations/ZodValidationsTypes";
import { api } from "../../base_url";

interface data {
  access_token: string;
  refresh_token: string;
}

export async function LoginMerchant(data: ZodLoginTypes) {
  const response = await fetch(`${api}/merchant/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email: data.email,
      password: data.password,
    }),
  })
    .then(async (data) => {
      const json: data = await data.json();
      if (data.status === 400) {
        return Promise.reject({
          success: false,
          error: "Email ou senha inválido",
        });
      }
      if (data.status === 401) {
        return Promise.reject({
          success: false,
          error: "Email ou senha inválido",
        });
      }
      if (data.status === 404) {
        return Promise.reject({
          success: false,
          error: "Email ou senha inválido",
        });
      }
      const token = await json.access_token;
      localStorage.setItem("token", token);

      return {
        success: true,
        message: "Login realizado com sucesso.",
        data: json,
      };
    })
    .catch((error) => {
      if (error && typeof error === "object" && "error" in error) {
        return { success: false, error: error.error };
      }
      return { success: false, error: "Erro desconhecido." };
    });

  return response;
}