import { useRouter } from "expo-router";
import { OnboardingTemplate } from "template/onboarding/onboarding";
import AppIntroSlider from "react-native-app-intro-slider";
import React, { useRef } from "react";
import { dataOnboarding } from "template/onboarding/data";
import { Text } from "react-native";
import { ButtonStyle } from "ui/button";

export default function Onboarding() {
  const route = useRouter()
  const sliderRef = useRef<AppIntroSlider>(null)

  const goToNext = () => {
    sliderRef.current?.goToSlide(sliderRef.current.state.activeIndex + 1);
  };

  const goToPrevious = () => {
    sliderRef.current?.goToSlide(sliderRef.current.state.activeIndex - 1);
  };

  const goToSignIn = () => {
    route.replace("/screens/Auth/SignIn/signIn");
  };
  return (

    <AppIntroSlider
      ref={sliderRef}
      data={dataOnboarding}
      renderItem={({ index }) => (
        <OnboardingTemplate
          button={index < dataOnboarding.length - 1 ? goToNext : goToSignIn}
        />
      )}
      showDoneButton={false}
      showNextButton={false}
      activeDotStyle={{
        backgroundColor: "#FDD835",
        width: 27,
        height: 14,
        borderRadius: 999,
        marginBottom: "165%",
      }}
      prevLabel="Voltar"
      showPrevButton={true}
      nextLabel="Próximo"
      renderPrevButton={() =>
        sliderRef.current?.state.activeIndex === 1 || 2 ? (
          <ButtonStyle
            children={
               <Text className="text-white font-interRegular text-[17px] border-solid border-b-[1px] border-b-yellow500 border-spacing-[2px]">
                      Voltar
                    </Text>
            }
            bg={""}
            size={""}
            onPress={goToPrevious}
          />
        ) : null
      }
      dotStyle={{
        backgroundColor: "#D2D4D6",
        width: 13,
        height: 14,
        borderRadius: 999,
        marginBottom: "165%",
      }}
    />

  );
}
