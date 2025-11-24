import { useRouter } from "expo-router"
import { OnboardingTemplate } from "template/onboarding/onboarding"

export default function Step4 () {
      const router = useRouter()
    return(
       <OnboardingTemplate index={4} router={ () => router.replace("/screens/onboarding/step2")}/>
    )
}