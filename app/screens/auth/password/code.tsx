import { useRouter } from "expo-router";
import { ForgotPasswordTemplate } from "template/auth/password/forgot-password";

export default function  CodeVerification (){
    const router = useRouter()
    return(
        <ForgotPasswordTemplate index={1} button={() => router.replace("/screens/auth/password/newPassword")} />
    )
}