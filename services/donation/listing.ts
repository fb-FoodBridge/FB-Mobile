import { api } from "services/base_url";

export async function ListingDonation(){
    try {
        const res = await fetch(`${api}/donation/all`, {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        });
    
        const json: any = await res.json();
        console.log(json)
    
        if (!res.ok) {
          return {
            success: false,
            error: json?.error || "Erro interno no servidor.",
          };
        }
    
        return {
          success: true,
          data: json,  
        };
      } catch (e) {
        console.log("Erro no ListNGODonated:", e);
        return {
          success: false,
          error: "Erro ao conectar ao servidor.",
        };
      }
}