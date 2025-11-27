import { useRouter } from "expo-router";
import { OnboardingTemplate } from "template/onboarding/onboarding";
import AppIntroSlider from "react-native-app-intro-slider";
import React, { useRef } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { dataOnboarding } from "template/onboarding/data";
import { Text, View } from "react-native";
import { ButtonStyle } from "ui/button";

export default function Onboarding() {
  const route = useRouter();
  const sliderRef = useRef<AppIntroSlider>(null);
  const insets = useSafeAreaInsets();
  const paginationBottom = (insets.bottom ?? 0) + 24;

  const goToNext = () => {
    sliderRef.current?.goToSlide(sliderRef.current.state.activeIndex + 1);
  };

  const goToPrevious = () => {
    sliderRef.current?.goToSlide(sliderRef.current.state.activeIndex - 1);
  };

  const goToSignIn = () => {
    route.replace("/screens/onboarding/role");
  };
  return (
    <AppIntroSlider
      ref={sliderRef}
      data={dataOnboarding}
      renderItem={({ index }) => (
        <OnboardingTemplate
          index={index + 1}
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
      }}
      prevLabel="Voltar"
      showPrevButton={true}
      nextLabel="Próximo"
      renderPrevButton={() =>
        sliderRef.current?.state.activeIndex === 1 || 2 ? (
          <View className=" relative top-[13px] left-1">
            <ButtonStyle
              children={
                <Text className=" text-white font-interRegular text-[17px] border-solid border-b-[1px] border-b-yellow500 border-spacing-[2px]">
                  Voltar
                </Text>
              }
              bg={""}
              size={""}
              onPress={goToPrevious}
            />
          </View>
        ) : null
      }
         
      dotStyle={{
        backgroundColor: "#D2D4D6",
        width: 13,
        height: 14,
        borderRadius: 999,
      }}
      renderPagination={(activeIndex: number) => {
  const total = dataOnboarding.length;

  return (
    <View
      style={{
        position: "absolute",
        top: insets.top + 460,   // <= FICA EM CIMA COM SAFE AREA
        left: 0,
        right: 0,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {Array.from({ length: total }).map((_, i) => (
        <View
          key={i}
          style={{
            backgroundColor: i === activeIndex ? "#FDD835" : "#D2D4D6",
            width: i === activeIndex ? 27 : 13,
            height: 14,
            borderRadius: 999,
            marginHorizontal: 6,
          }}
        />
      ))}
    </View>
  );
}}
    />
  );
}
