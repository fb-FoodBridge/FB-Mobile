import { useRouter } from "expo-router";
import { ForgotPasswordTemplate } from "template/auth/password/forgot-password";

export default function Forgot () {
  const router = useRouter()
  return(
    <ForgotPasswordTemplate index={0} button={() => router.replace("/screens/auth/password/code")}/>
  )
}