import { ListingNgoDonatedResponse, PendingDonation} from "interface/interfaces";
import { api } from "services/base_url";

export async function ListingDonationPending({id}:PendingDonation){

    try {
        const res = await fetch(`${api}/donation/pending/${id}`, {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        });
    
        const json:ListingNgoDonatedResponse  = await res.json();
        console.log("teste",json)
        if (!res.ok) {
          return {
            success: false,
            error:  "Erro interno no servidor.",
          };
        }
    
        return {
          success: true,
          data: json.data,  
        };
      } catch (e) {
        return {
          success: false,
          error: "Erro ao conectar ao servidor.",
        };
      }
}