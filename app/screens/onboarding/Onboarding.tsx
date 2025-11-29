import { useRouter } from "expo-router";
import { OnboardingTemplate } from "template/onboarding/onboarding";
import AppIntroSlider from "react-native-app-intro-slider";
import React, { useRef, useState } from "react";
import { View, Text, StyleSheet, useWindowDimensions } from "react-native";
import { dataOnboarding } from "template/onboarding/data";
import { ButtonStyle } from "ui/button";

export default function Onboarding() {
  const router = useRouter();
  const sliderRef = useRef<AppIntroSlider>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const { height } = useWindowDimensions();
  const BUTTON_TOP = height * 0.88;

  const goToNext = () => {
    const nextIndex = activeIndex + 1;
    sliderRef.current?.goToSlide(nextIndex);
    setActiveIndex(nextIndex);
  };

  const goToPrevious = () => {
    const prevIndex = activeIndex - 1;
    sliderRef.current?.goToSlide(prevIndex);
    setActiveIndex(prevIndex);
  };

  const goToSignIn = () => {
    router.replace("/screens/onboarding/role");
  };

  return (
    <View style={{ flex: 1 }}>
      <AppIntroSlider
        ref={sliderRef}
        data={dataOnboarding}
        renderItem={({ index }) => (
          <OnboardingTemplate
            index={index + 1}
            button={index < dataOnboarding.length - 1 ? goToNext : goToSignIn}
            showBackButton={activeIndex > 0}
            backAction={goToPrevious}
          />
        )}
        showNextButton={false}
        showPrevButton={false}
        showDoneButton={false}
        onSlideChange={(index) => setActiveIndex(index)}
        dotStyle={{ width: 0, height: 0 }}
        activeDotStyle={{ width: 0, height: 0 }}
      />

      <View style={styles.dotsWrapper}>
        {dataOnboarding.map((_, i) => (
          <View
            key={i}
            style={i === activeIndex ? styles.activeDot : styles.dot}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  dotsWrapper: {
    position: "absolute",
    bottom: "43%",
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
});
