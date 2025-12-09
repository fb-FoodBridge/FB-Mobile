import { Text, View } from "react-native";
import Step1 from "../../assets/svg/illustrations/onboard-welcome.svg";
import Step2 from "../../assets/svg/illustrations/onboard-combat.svg";
import Step3 from "../../assets/svg/illustrations/Sushi-cook.svg";
import { dataOnboarding } from "./data";
import { ButtonStyle } from "ui/button";
import { useRouter } from "expo-router";
import AppIntroSlider from "react-native-app-intro-slider";
import React, { useRef, useState } from "react";
import { StyleSheet } from "react-native";


export function OnboardingTemplate() {
  const router = useRouter();
  const sliderRef = useRef<AppIntroSlider>(null);
  const [activeIndex, setActiveIndex] = useState(0);


  const goToNext = () => {
    if (activeIndex < dataOnboarding.length - 1) {
      sliderRef.current?.goToSlide(activeIndex + 1, true);
    } else {
      router.replace("/screens/oboarding/role/role");
    }
  };

  const goToPrevious = () => {
    if (activeIndex > 0) {
      sliderRef.current?.goToSlide(activeIndex - 1, true);
    }
  };

  return (
    <View className={`flex-1 bg-black800`}>
      <Text className="font-nourd_bold text-[26px] text-offWhite ml-[30px] mt-[50px]">
        FOOD<Text className="text-yellow500">BRIDGE</Text>
      </Text>

      <View className="flex-1 justify-center items-center ">
        {activeIndex === 0 ? (
          <View className="top-[20px] w-[330px] h-[330px] items-center">
            <Step1 />
          </View>
        ) : null}

        {activeIndex === 1 ? (
          <View className="top-[-18px] w-[330px] h-[330px] items-center ">
            <Step3 />
          </View>
        ) : null}
        {activeIndex === 2 ? (
          <View className="top-[50px] w-[330px] h-[330px] items-center">
            <Step2 />
          </View>
        ) : null}

      <View className="flex-1 bg-lightGray rounded-t-[44px] pt-[21px] ">
        <View style={[styles.dotsWrapper, { marginBottom: 10 }]}>
          {dataOnboarding.map((_, i) => (
            <View
              key={i}
              style={i === activeIndex ? styles.activeDot : styles.dot}
            />
          ))}
        </View>

        <AppIntroSlider
          ref={sliderRef}
          data={dataOnboarding}
          renderItem={({ item }) => (
            <View className="flex-col items-center">
                {item.title}
                {item.description}

              <View className="items-center mt-8 ">
                <ButtonStyle
                type="default"
                  bg="bg-yellowOrange"
                  size="w-[277px] h-[51px]"
                  onPress={goToNext}
                  children={
                    <Text className="font-interBold text-[16px] text-offWhite">
                      {activeIndex < dataOnboarding.length - 1
                        ? "Próximo"
                        : "Começar"}
                    </Text>
                  }
                />
              </View>
            </View>
          )}
          showNextButton={false}
          showPrevButton={false}
          showDoneButton={false}
          onSlideChange={(index) => setActiveIndex(index)} 
          dotStyle={{ width: 0, height: 0 }}
          activeDotStyle={{ width: 0, height: 0 }}
        />

        <View className="flex-1 justify-center px-[30px]">
          {activeIndex > 0 ? (
            <View className="flex-row justify-between">
              <ButtonStyle
              type="default"
                onPress={goToPrevious}
                children={
                  <Text className="text-offWhite font-interRegular text-[17px] border-b border-yellow500">
                    Voltar
                  </Text>
                }
              />

              <ButtonStyle
              type="default"
                onPress={() => router.replace("/screens/oboarding/role/role")}
                children={
                  <Text className="text-offWhite font-interRegular text-[17px] border-b border-yellow500">
                    Pular
                  </Text>
                }
              />
            </View>
          ) : (
            <View className="items-end">
              <ButtonStyle
              type="default"
                onPress={() => router.replace("/screens/onboarding/role/role")}
                children={
                  <Text className="text-offWhite font-interRegular text-[17px] border-b border-yellow500">
                    Pular
                  </Text>
                }
              />
            </View>
          )}
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  dotsWrapper: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  dot: {
    backgroundColor: "#D2D4D6",
    width: 12,
    height: 12,
    borderRadius: 999,
    marginHorizontal: 6,
  },
  activeDot: {
    backgroundColor: "#FDD835",
    width: 26,
    height: 12,
    borderRadius: 999,
    marginHorizontal: 6,
  },
});
