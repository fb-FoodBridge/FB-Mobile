import { ForgotPasswordTemplate } from "template/auth/password/forgot-password";

export default function NewPassword () {
    
    return(
        <ForgotPasswordTemplate index={2} button={() => alert("ola")}/>
    )
}