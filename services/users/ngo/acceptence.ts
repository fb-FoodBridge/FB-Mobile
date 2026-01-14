
import { AcceptanceDonation } from "interface/interfaces";
import { api } from "../../base_url";




export async function AcceptenceDonation({email,id}:AcceptanceDonation) {
  try {
    const res = await fetch(`${api}/ngo/acceptence/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: email,
        
      }),
    });
    

    if (res.status === 401) {
      return {
        success: false,
        error: "id inválido",
      };
    }

    if (!res.ok) {
      return {
        success: false,
        error: "Erro interno no servidor.",
      };
    }

    return {
      success: true,
      message: "Doação aceita com sucesso",
    };

  } catch (e) {
    return {
      success: false,
      error: "Erro ao conectar ao servidor.",
    };
  }
}
