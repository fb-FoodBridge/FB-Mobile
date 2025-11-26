import { useRouter } from "expo-router";
import { SafeAreaView, Text, View } from "react-native";
import { OnboardingTemplate } from "template/onboarding/onboarding";
import AppIntroSlider from "react-native-app-intro-slider";

export default function OnboardingStep1() {
  const router = useRouter();
  const slide = [
    { key: 1, component: <OnboardingTemplate index={1} router={function (): void {
      throw new Error("Function not implemented.");
    } } /> },
    { key: 2, component: <OnboardingTemplate index={2} router={function (): void {
      throw new Error("Function not implemented.");
    } } /> },
    { key: 3, component: <OnboardingTemplate index={3} router={function (): void {
      throw new Error("Function not implemented.");
    } } /> },
    { key: 4, component: <OnboardingTemplate index={4} router={function (): void {
      throw new Error("Function not implemented.");
    } } /> },
  ];
  return (
    <AppIntroSlider
      data={slide}
      renderItem={({ item }) => item.component}
      showNextButton={}}
      showDoneButton={false}
      dotStyle={{ backgroundColor: "#444" }}
      activeDotStyle={{ backgroundColor: "#F2C94C" }}
    />
  );
}
