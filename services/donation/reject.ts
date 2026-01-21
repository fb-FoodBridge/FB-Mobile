
import { OptionsDonation } from "interface/interfaces";
import { api } from "../base_url";




export async function RejectDonation({email,ngoId,
  donationId
}:OptionsDonation) {
  try {
    const res = await fetch(`${api}/ngo/reject/${ngoId}`, {
      method: "PUT",
      headers: {
      "donation": donationId,
      "Content-Type": "application/json",
    },
      body: JSON.stringify({
        email: email,
        
      }),
    });
    
    console.log( await res.json())

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
      message: "Doação rejeitada",
    };

  } catch (e) {
    return {
      success: false,
      error: "Erro ao conectar ao servidor.",
    };
  }
}
