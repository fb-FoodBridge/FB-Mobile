import { useRouter } from "expo-router";
import { OnboardingTemplate } from "template/onboarding/onboarding";
import AppIntroSlider from "react-native-app-intro-slider";
import React, { useRef, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { dataOnboarding } from "template/onboarding/data";
import { ButtonStyle } from "ui/button";

export default function Onboarding() {
  const router = useRouter();
  const sliderRef = useRef<AppIntroSlider>(null);
  const [activeIndex, setActiveIndex] = useState(0);

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
          />
        )}
        showNextButton={false}
        showPrevButton={false}
        showDoneButton={false}
        
        // Mantém sincronização pelo swipe também
        onSlideChange={(index) => setActiveIndex(index)}

        // Esconde dots originais (mantém animação interna)
        dotStyle={{ width: 0, height: 0 }}
        activeDotStyle={{ width: 0, height: 0 }}
      />

      {/* Dots FIXOS */}
      <View style={styles.dotsWrapper}>
        {dataOnboarding.map((_, i) => (
          <View
            key={i}
            style={i === activeIndex ? styles.activeDot : styles.dot}
          />
        ))}
      </View>

      {/* Botão VOLTAR */}
      {activeIndex > 0 && (
        <View style={styles.backButton}>
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
  );
}

const styles = StyleSheet.create({
  dotsWrapper: {
    position: "absolute",
    bottom: "47%",
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
    bottom: "6.7%",
  },
});
