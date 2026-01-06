import { propsValidateCode } from "interface/interfaces";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { api } from "services/base_url";
import { getEmail } from "utils/storage/userStorage";

export async function ValidateCode( { code }:propsValidateCode ) {
      const email = await getEmail()
      console.log(email)
      console.log(code)
      const response = await fetch(`${api}/forgot-password/validate-code`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          code: code,
          email: email
        }),
      })
        .then(async (res) => {
          const json:propsValidateCode = await res.json();
          console.log(json)
          if (res.status === 401) {
            return {
              success: false,
              error: "Código inválido",
            };
            
          }
           if (!res.ok) {
          return {
            success: false,
            error: json?.error || "Erro interno no servidor.",
          };
        }
        
    
          return {
            success: true,
            message: "Código válido",
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
    