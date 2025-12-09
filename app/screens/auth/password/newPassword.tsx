import { useRouter } from "expo-router";
import { ForgotPasswordTemplate } from "template/auth/password/forgot-password";

export default function NewPassword () {
    const router = useRouter()
    return(
        <ForgotPasswordTemplate index={2} button={() => router.replace("/screens/auth/login")}/>
    )
}