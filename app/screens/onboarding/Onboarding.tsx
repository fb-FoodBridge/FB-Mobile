import { useRouter } from "expo-router";
import { OnboardingTemplate } from "template/onboarding/onboarding";
import AppIntroSlider from "react-native-app-intro-slider";
import React, { useRef, useState } from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import { dataOnboarding } from "template/onboarding/data";
import { ButtonStyle } from "ui/button";

export default function Onboarding() {
  const router = useRouter();
  const sliderRef = useRef<AppIntroSlider>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const goToNext = () => {
    sliderRef.current?.goToSlide(activeIndex + 1);
    setActiveIndex(activeIndex + 1);
  };

  const goToPrevious = () => {
    sliderRef.current?.goToSlide(activeIndex - 1);
    setActiveIndex(activeIndex - 1);
  };

  const goToSignIn = () => {
    router.replace("/screens/onboarding/role");
  };

  return (
    <>
      <StatusBar translucent backgroundColor="transparent" barStyle="light-content" />

      <View style={{ flex: 1, backgroundColor: "#000000" }}>
        <AppIntroSlider
          ref={sliderRef}
          data={dataOnboarding}
          renderItem={({ index }) => (
            <OnboardingTemplate
              index={index + 1}
              button={index < dataOnboarding.length - 1 ? goToNext : goToSignIn}
            />
          )}

         
          renderPagination={() => null}
          dotStyle={{ width: 0, height: 0, backgroundColor: "transparent" }}
          activeDotStyle={{ width: 0, height: 0, backgroundColor: "transparent" }}

          showNextButton={false}
          showPrevButton={false}
          showDoneButton={false}

          onSlideChange={(i) => setActiveIndex(i)}

          
          style={{ flex: 1, backgroundColor: "#000000" }}
          contentContainerStyle={{ flexGrow: 1, backgroundColor: "#000000" }}
        />

        <View style={[styles.dotsWrapper, { bottom: 80 }]}>
          {dataOnboarding.map((_, i) => (
            <View
              key={i}
              style={i === activeIndex ? styles.activeDot : styles.dot}
            />
          ))}
        </View>

            {activeIndex > 0 && (
          <View style={[styles.backButton, { bottom: "8%" }]}>
            <ButtonStyle
              onPress={goToPrevious}
              bg=""
              size=""
              children={
                <Text className="text-offWhite text-[17px] font-interRegular border-b border-yellow500">
                  Voltar
                </Text>
              }
            />
          </View>
        )}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  dotsWrapper: {
    position: "absolute",
    alignSelf: "center",
    flexDirection: "row",
  },
  dot: {
    backgroundColor: "#D2D4D6",
    width: 13,
    height: 14,
    borderRadius: 999,
    marginHorizontal: 6,
  },
  activeDot: {
    backgroundColor: "#FDD835",
    width: 27,
    height: 14,
    borderRadius: 999,
    marginHorizontal: 6,
  },
  backButton: {
    position: "absolute",
    left: "10%",
  },
});
