import { SafeAreaView, Text, View, Image } from "react-native";
import { dataOnboarding } from "./data";
import Step1 from "../../assets/icons/onboard-welcome.svg";
import Step2 from "../../assets/icons/onboard-combat.svg";
import Step3 from "../../assets/icons/Sushi-cook.svg";
import { propsOnboarding } from "interface/interfaces";
import { ButtonStyle } from "ui/button";
import { useRouter } from "expo-router";

export function OnboardingTemplate({ index, button }: propsOnboarding) {
  const router = useRouter();
  if (index === undefined) {
    index = 1;
  }
  if (!button) {
    return null;
  }
  return (
    <SafeAreaView className="bg-black800 flex-1">
      <Text
        className="font-nourd_bold text-[26.45px] text-white ml-[30px]
            mt-[30px]"
      >
        FOOD<Text className="text-yellow500">BRIDGE</Text>
      </Text>

      <View className="flex-col flex-1 justify-center items-center mt-[19%] relative">
        {index !== 4 ? (
          <View className="relative z-2 top-14 h-[340px]">
            {index === 1 ? (
              <Step1 />
            ) : index === 2 ? (
              <Step2 />
            ) : index === 3 ? (
              <Step3 />
            ) : null}
          </View>
        ) : null}

        <View
          className={`bg-lightGray flex-1 w-full  ${
            index !== 4 ? "min-h-[41%]" : "h-full"
          } rounded-tr-[44px] rounded-tl-[44px] `}
        >
          <View className="mt-[21px] gap-[61px] items-center">
            <View
              className={`items-center ${
                index === 2 ? "gap-[75.44px]" : "gap-[21px]"
              }`}
            >
              {dataOnboarding.map((data) => {
                if (data.index === index) {
                  return (
                    <View
                      key={index}
                      className=" flex-col items-center pt-[26px]"
                    >
                      {data.title}
                      {data.description}
                    </View>
                  );
                }
                return null;
              })}
            </View>

            <ButtonStyle
              bg="bg-yellowOrange"
              size="w-[277px] h-[51px]"
              onPress={button}
              children={
                <Text className="font-interBold text-[16.6px] text-white">
                  Próximo
                </Text>
              }
            />
          </View>
          <View className="flex-1 justify-end items-end mr-[30px] mb-[30px]">
            <ButtonStyle
              onPress={() => router.replace("/screens/onboarding/role")}
              children={
                <Text className="text-white font-interRegular text-[17px] border-solid border-b-[1px] border-b-yellow500 border-spacing-[2px]">
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
