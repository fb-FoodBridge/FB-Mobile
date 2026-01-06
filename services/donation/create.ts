import { api } from "services/base_url";
import { ZodValidate } from "utils/zodValidationUtil";
import { ZodDonationSchema } from "validations/ZodValidationSchema";
import { ZodCreateDonationTypes } from "validations/ZodValidationsTypes";
import { jwtDecode } from "jwt-decode";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { decodeToken } from "interface/interfaces";

export async function CreateDonation(data: ZodCreateDonationTypes) {
  const validate = ZodValidate(ZodDonationSchema, data);
  const token = await AsyncStorage.getItem("token");
  if(!token){
    return Promise.reject({ success: false, error: "Token não encontrado" });
  }

  const decodeToken:decodeToken = jwtDecode(token)


  const response = await fetch(`${api}/donation`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username_merchant: decodeToken.username,
      merchant_id: decodeToken.id,
      quantity: 1,
      ngo_id: validate.data?.ngo_id,
      products: data.products.map((items) => {
        return {
          name: items.name,
          validity: items.validity,
          quantity: items.quantity,
        };
      }),
    }),
  })
    .then(async (data) => {
      const result = await data.json();
      console.log(result);
      if (result.status === 401) {
        return Promise.reject({ success: false, error: "Sem produtos" });
      }

      if (result.status === 409) {
        return Promise.reject({
          success: false,
          error: "Somente comerciantes podem criar doações",
        });
      }

      return {
        success: true,
        message: "Doação criada com sucesso",
        data: result,
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
