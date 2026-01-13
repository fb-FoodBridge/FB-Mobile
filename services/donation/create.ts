import { api } from "services/base_url";
import { ZodValidate } from "utils/zodValidationUtil";
import { ZodDonationSchema } from "validations/ZodValidationSchema";
import { ZodCreateDonationTypes } from "validations/ZodValidationsTypes";
import AsyncStorage from "@react-native-async-storage/async-storage";

export async function CreateDonation(data: ZodCreateDonationTypes) {
  const validate = ZodValidate(ZodDonationSchema, data);
  if (!validate.success) {
    return {
      success: false,
      fields: validate.fields,
    };
  }
  const token = await AsyncStorage.getItem("token");

  if (!token) {
    return Promise.reject({ success: false, error: "Token não encontrado" });
  }

  function brToISO(date: string) {
  const [day, month, year] = date.split("/");
  return `${year}-${month}-${day}`;
}

  const response = await fetch(`${api}/donation`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      quantity: 1,
      ngo_id: validate.data?.ngo_id,
      products: data.products.map((items) => {
        return {
          name: items.name,
          validity: brToISO(items.validity),
          quantity: items.quantity,
        };
      }),
    }),
  })
    .then(async (data) => {
      const result = await data.json();
      if (data.status === 401) {
        return Promise.reject({ success: false, error: "Sem produtos" });
      }

      if (data.status === 409) {
        return Promise.reject({
          success: false,
          error: "Somente comerciantes podem criar doações",
        });
      }

       if (!data.ok) {
          return {
            success: false,
            error:  "Erro interno no servidor.",
          };
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
