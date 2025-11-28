import { SafeAreaView, Text, View } from "react-native";
import Step1 from "../../assets/icons/onboard-welcome.svg";
import Step2 from "../../assets/icons/onboard-combat.svg";
import Step3 from "../../assets/icons/Sushi-cook.svg";
import { dataOnboarding } from "./data";
import { propsOnboarding } from "interface/interfaces";
import { ButtonStyle } from "ui/button";
import { useRouter } from "expo-router";

export function OnboardingTemplate({ index, button }: propsOnboarding) {
  const router = useRouter();

  if (!index) index = 1;
  if (!button) return null;

  return (
    <SafeAreaView className="flex-1 bg-black800">


      <Text className="font-nourd_bold text-[26px] text-offWhite ml-[30px] mt-[40px]">
        FOOD<Text className="text-yellow500">BRIDGE</Text>
      </Text>


      <View className="flex-1 justify-center items-center mt-[166px]">


        {index === 1 ? (
          <View className="top-[20px] w-[330px] h-[330px] items-center">
            <Step1 />

          </View>
        ) : null}

        {index === 3? (
          <View className="top-[-18px] w-[330px] h-[330px] items-center ">
            {index === 3 ? <Step3 /> : null}
          </View>
        ): null}
        {index === 2 ?(
          <View className="top-[50px] w-[330px] h-[330px] items-center">
            <Step2 />
          </View>
        ): null}


        <View className="bg-lightGray w-full rounded-tr-[44px] rounded-tl-[44px] flex-1 pt-[40px]">

          <View className="items-center px-10 mb-10">
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


          <View className="flex-1 justify-end items-end pr-[30px] pb-[16.5%]">
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
    </SafeAreaView>
  );
}
