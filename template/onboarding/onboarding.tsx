import { SafeAreaView, Text, View, Image } from "react-native";
import { dataOnboarding } from "./data";
import Step1 from "../../assets/icons/onboard-welcome.svg";
import Step2 from "../../assets/icons/onboard-combat.svg";
import Step3 from "../../assets/icons/Sushi-cook.svg";
import { Pagination } from "ui/Pagination";
import { propsOnboarding } from "interface/interfaces";
import { ButtonStyle } from "ui/button";
import { useRouter } from "expo-router";
import { CardButton } from "components/cardButton";
import Chief from "../../assets/icons/chief.svg"
import NGO from "../../assets/png/ngo.png"

export function OnboardingTemplate({ index, router }: propsOnboarding) {
  const route = useRouter();
  return (
    <SafeAreaView className="bg-black800 flex-1">
      <Text
        className="font-nourd_bold text-[26.45px] text-white ml-[30px]
            mt-[30px]"
      >
        FOOD<Text className="text-yellow500">BRIDGE</Text>
      </Text>
      <View className="flex-col flex-1 justify-center items-center mt-[19%] relative">
        <View className="relative z-2 top-14">
          {index === 1 ? (
            <Step1 />
          ) : index === 2 ? (
            <Step2 />
          ) : index === 3 ? (
            <Step3 />
          ) : null}
        </View>
        <View className={`bg-lightGray flex-1 w-full ${index === 4 ? "h-[41%]" : "h-[79.5%]"} rounded-tr-[44px] rounded-tl-[44px] `}>
          <View className="mt-[21px] gap-[61px] items-center">
            <View className={`items-center ${index === 2 ? "gap-[75.44px]" : "gap-[21px]"}`}>
              <Pagination index={index} />

              {dataOnboarding.map((data) => {
                if (data.index === index) {
                  return (
                    <View key={index} className=" flex-col items-center">
                      {data.title}
                      {data.description}
                    </View>
                  );
                }
                return null;
              })}
            </View>
            {index === 4 ? (
              <View className="w-full pl-[68px] pr-[68px] gap-[69px]">
                <CardButton onPress={function (): void {
                  throw new Error("Function not implemented.");
                }} children={
                  <View className="flex-1 flex-row items-center justify-center mt-[-3px]">
                    <Chief />
                    <Text className="font-interBold text-[24px] text-white">Comerciante</Text>
                  </View>
                } />
                <CardButton onPress={function (): void {
                  throw new Error("Function not implemented.");
                }} children={
                  <View className="flex-1 flex-row items-center justify-start mt-[-3px] gap-[43px]">
                    <Image source={NGO} className="h-[143px] w-[85px] ml-[-17px]" />
                    <Text className="font-interBold text-[24px] text-white ml-2">Instituição</Text>
                  </View>
                } />
              </View>
            ) :
              <ButtonStyle
                bg="bg-yellowOrange"
                size="w-[277px] h-[51px]"
                onPress={router}
                children={
                  <Text className="font-interBold text-[16.6px] text-white">
                    Próximo
                  </Text>
                }
              />
            }
          </View>
          {index === 1 ? (
            <View className="flex-1 justify-end items-end pr-[25px] pb-[25px] pl-[25px]">

              <ButtonStyle
                children={
                  <Text className="text-white font-interRegular text-[17px] border-solid border-b-[1px] border-b-yellow500 border-spacing-[2px]">
                    Pular
                  </Text>
                }
                bg={""}
                size={""}
                onPress={() => route.replace("/screens/onboarding/step4")}
              />
            </View>

          ) : index === 2 ? (
            <View className="flex-1 justify-end items-end ">
              <View className="justify-between w-full flex-row pr-[25px] pb-[25px] pl-[25px]">
                <ButtonStyle
                  children={
                    <Text className="text-white font-interRegular text-[17px] border-solid border-b-[1px] border-b-yellow500 border-spacing-[2px]">
                      Voltar
                    </Text>
                  }
                  bg={""}
                  size={""}
                  onPress={() => route.replace("/screens/onboarding/welcome")}
                />

                <ButtonStyle
                  children={
                    <Text className="text-white font-interRegular text-[17px] border-solid border-b-[1px] border-b-yellow500 border-spacing-[2px]">
                      Pular
                    </Text>
                  }
                  bg={""}
                  size={""}
                  onPress={() => route.replace("/screens/onboarding/step4")}
                />
              </View>
            </View>
          ) : index === 3 ? (
            <View className="flex-1 justify-end items-end ">
              <View className="justify-between w-full flex-row pr-[25px] pb-[25px] pl-[25px]">
                <ButtonStyle
                  children={
                    <Text className="text-white font-interRegular text-[17px] border-solid border-b-[1px] border-b-yellow500 border-spacing-[2px]">
                      Voltar
                    </Text>
                  }
                  bg={""}
                  size={""}
                  onPress={() => route.replace("/screens/onboarding/step2")}
                />

                <ButtonStyle
                  children={
                    <Text className="text-white font-interRegular text-[17px] border-solid border-b-[1px] border-b-yellow500 border-spacing-[2px]">
                      Pular
                    </Text>
                  }
                  bg={""}
                  size={""}
                  onPress={() => route.replace("/screens/onboarding/step4")}
                />
              </View>
            </View>
          ) : null}
        </View>
      </View>
    </SafeAreaView>
  );
}
