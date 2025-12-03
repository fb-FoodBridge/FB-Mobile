import { SafeAreaView, Text, View } from "react-native";
import Step1 from "../../assets/icons/onboard-welcome.svg";
import Step2 from "../../assets/icons/onboard-combat.svg";
import Step3 from "../../assets/icons/Sushi-cook.svg";
import { dataOnboarding } from "./data";
import { propsOnboarding } from "interface/interfaces";
import { ButtonStyle } from "ui/button";
import { useRouter } from "expo-router";
import AppIntroSlider from "react-native-app-intro-slider"
import { StyleSheet } from "react-native";
import { useRef, useState } from "node_modules/@types/react";

export function OnboardingTemplate() {
 const router = useRouter();
  const sliderRef = useRef<AppIntroSlider>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const goToNext = () => {
    const nextIndex = activeIndex + 1;
    if (nextIndex < dataOnboarding.length) {
      sliderRef.current?.goToSlide(nextIndex);
      setActiveIndex(nextIndex);
    } else {
      goToSignIn();
    }
  };

  const goToPrevious = () => {
    const prevIndex = activeIndex - 1;
    if (prevIndex >= 0) {
      sliderRef.current?.goToSlide(prevIndex);
      setActiveIndex(prevIndex);
    }
  };

  const goToSignIn = () => {
    router.replace("/screens/onboarding/role");
  };

  const renderImage = (index: number) => {
    if (index === 0) return <Step1 style={{ width: 330, height: 330 }} />;
    if (index === 1) return <Step2 style={{ width: 330, height: 330 }} />;
    if (index === 2) return <Step3 style={{ width: 330, height: 330 }} />;
  };



  return (
    <View className="flex-1 bg-black800 relative">
      <Text className="font-nourd_bold text-[26px] text-offWhite ml-[30px] mt-[40px]">
        FOOD<Text className="text-yellow500">BRIDGE</Text>
      </Text>

      <View className="flex-1 justify-center items-center mt-[20%]">
        {index === 1 ? (
          <View className="top-[20px] w-[330px] h-[330px] items-center">
            <Step1 />
          </View>
        ) : null}

        {index === 3 ? (
          <View className="top-[-18px] w-[330px] h-[330px] items-center ">
            <Step3 />
          </View>
        ) : null}
        {index === 2 ? (
          <View className="top-[50px] w-[330px] h-[330px] items-center">
            <Step2 />
          </View>
        ) : null}

        <View className="bg-lightGray w-full rounded-tr-[44px]  rounded-tl-[44px] flex-1 pt-[40px]">
          <AppIntroSlider
            ref={sliderRef}
            data={dataOnboarding}
            renderItem={({ item, index }) => (
              <View className="items-center mt-[21px]">
                <Text className="font-nourd_bold text-[22px] text-black800 mb-2">
                  {item.title}
                </Text>
                <Text className="font-interRegular text-[16px] text-black800 text-center">
                  {item.description}
                </Text>

                <View className="items-center mt-8">
                  <ButtonStyle
                    bg="bg-yellowOrange"
                    size="w-[277px] h-[51px]"
                    onPress={index < dataOnboarding.length - 1 ? goToNext : goToSignIn}
                    children={
                      <Text className="font-interBold text-[16px] text-offWhite">
                        {index < dataOnboarding.length - 1 ? "Próximo" : "Começar"}
                      </Text>
                    }
                  />
                </View>
              </View>
            )}
            showNextButton={false}
            showPrevButton={false}
            showDoneButton={false}
            onSlideChange={setActiveIndex}
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
            <View className="items-center mt-[21px] ">
              {dataOnboarding.map((data) =>
                data.index === index ? (
                  <View key={index} className="items-center gap-4">
                    {data.title}
                    {data.description}
                  </View>
                ) : null
              )}
            </View>

            <View className="items-center">
              <ButtonStyle
                bg="bg-yellowOrange"
                size="w-[277px] h-[51px]"
                onPress={button}
                children={
                  <Text className="font-interBold text-[16px] text-offWhite">
                    Próximo
                  </Text>
                }
              />
            </View>
            {showBackButton ? (
              <View className=" flex mt-[64px] items-center ml-[40px] mr-[40px]">
                <View className="w-full justify-between flex-row">

                  <ButtonStyle
                    bg=""
                    size=""
                    onPress={backAction}
                    children={
                      <Text className="text-offWhite font-interRegular text-[17px] border-b border-yellow500">
                        Voltar
                      </Text>
                    }
                  />


                  <View className="">
                    <ButtonStyle
                      onPress={() => router.replace("/screens/onboarding/role")}
                      children={
                        <Text className="text-offWhite font-interRegular text-[17px] border-b border-yellow500">
                          Pular
                        </Text>
                      }
                    />
                  </View>
                </View>
              </View>
            )
              :
              (

                <View className="flex mt-[64px] items-end ml-[40px] mr-[40px]">
                  <ButtonStyle
                    onPress={() => router.replace("/screens/onboarding/role")}
                    children={
                      <Text className="text-offWhite font-interRegular text-[17px] border-b border-yellow500">
                        Pular
                      </Text>
                    }
                  />
                </View>)
            }
          </View>
        </View>
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
