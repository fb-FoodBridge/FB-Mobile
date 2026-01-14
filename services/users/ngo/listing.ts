import { api } from "../../base_url";

export async function ListNGO() {
  try {
    const res = await fetch(`${api}/ngo/all`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });

    const json: any = await res.json();

    if (!res.ok) {
      return {
        success: false,
        error: json?.error || "Erro interno no servidor.",
      };
    }

    return {
      success: true,
      data: json.data.ngo,  
    };
  } catch (e) {
    return {
      success: false,
      error: "Erro ao conectar ao servidor.",
    };
  }
}
