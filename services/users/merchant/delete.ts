import { userId } from "interface/interfaces";
import { api } from "services/base_url";

export async function deleteMerchant({ id }: userId) {
  try {
    const response = await fetch(`${api}/merchant/delete/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });

    if (!response.ok) {
      return {
        success: false,
        error: "Erro interno no servidor.",
      };
    }

    if (response.status === 401) {
      return {
        success: false,
        error: "Id inválido",
      };
    }
     return {
      success: true,
      message: "Usuário deletado com sucesso",
    };
  } catch (e) {
    return {
      success: false,
      error: "Erro ao conectar ao servidor.",
    };
  }
}
