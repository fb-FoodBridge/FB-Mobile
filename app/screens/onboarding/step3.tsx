import { useRouter } from "expo-router"
import { OnboardingTemplate } from "template/onboarding/onboarding"

export default function Step3 () {
      const router = useRouter()
    return(
       <OnboardingTemplate index={3} router={ () => router.replace("/screens/onboarding/step2")}/>
    )
}