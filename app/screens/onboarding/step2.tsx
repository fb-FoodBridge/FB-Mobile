
import { useRouter } from "expo-router"
import { OnboardingTemplate } from "template/onboarding/onboarding"

export default function Step2() {
    const router = useRouter()
    return(
       <OnboardingTemplate index={2} router={ () => router.replace("/screens/onboarding/step3")}/>
    )
}