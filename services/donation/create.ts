import { api } from "services/base_url";
import { ZodValidate } from "utils/zodValidationUtil";
import { ZodDonationSchema } from "validations/ZodValidationSchema";
import { ZodCreateDonationTypes } from "validations/ZodValidationsTypes";

export async function CraeteDonation(data: ZodCreateDonationTypes) {
    const validate = ZodValidate(ZodDonationSchema, data);
    try{
        const response = await fetch(`${api}/donation`, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
            products: [
                {
                    name: validate.data?.name,
                    validity: validate.data?.validity,
                    quantity: validate.data?.quantity,
                }
            ]

                
            })
        })

    }
}