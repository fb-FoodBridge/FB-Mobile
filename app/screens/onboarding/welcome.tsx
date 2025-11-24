import { useRouter } from "expo-router";
import { SafeAreaView, Text, View } from "react-native";
import { OnboardingTemplate } from "template/onboarding/onboarding";

export default function OnboardingStep1() {
  const router = useRouter()
  return (
   
        <OnboardingTemplate index={1} router={() => router.replace("/screens/onboarding/step2")}/>
    
  );
}
