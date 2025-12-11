import { propsLogin } from "interface/interfaces";
import { api } from "services/base_url";

export async function Login({ ...props }: propsLogin) {
  try {
    const response = await api.post("/merchant/login", {
      email: props.email,
      password: props.password,
    });
    return response;
  } catch (error) {
    console.log(error);
  }
}
