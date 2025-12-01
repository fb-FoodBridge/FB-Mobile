import { SafeAreaView, Text, View, Image } from "react-native";
import { useRouter } from "expo-router";
import { CardButton } from "components/cardButton";
import Chief from "../../../assets/icons/chief.svg";
import NGO from "../../../assets/png/ngo.png"

export default function OnboardingRole() {
  const router = useRouter();

  return (
    <SafeAreaView className="bg-black800 flex-1">
      <Text
        className="font-nourd_bold text-[26.45px] text-offWhite ml-[30px]
            mt-[30px]"
      >
        FOOD<Text className="text-yellow500">BRIDGE</Text>
      </Text>

      <View className="flex-col flex-1 justify-center items-center mt-[19%] relative">
        <View
          className={`bg-lightGray flex-1 w-full h-full rounded-tr-[44px] rounded-tl-[44px] `}
        >
          <View className="mt-[21px] gap-[61px] items-center">
            <View className={`items-center gap-[21px]`}>
              <Text className="font-interBold  w-[376px] leading-[50px] text-offWhite text-[36px] text-center">
                Em qual lado da ponte você está?
              </Text>

              <Text className="font-interRegular w-[275px] text-center text-14 text-offWhite">
                Quer doar alimentos ou recebê-los para quem precisa?
              </Text>
            </View>
            <View className="w-[66%] gap-[69px]">
              <CardButton
                onPress={() => router.replace("/screens/auth/welcome")}
                children={
                  <View className="flex-1 flex-row items-center justify-center mt-[-3px]">
                    <Chief />
                    <Text className="font-interBold text-[24px] text-offWhite">
                      Comerciante
                    </Text>
                  </View>
                }
              />
              <CardButton
                onPress={() => router.replace("/screens/auth/welcome")
                }
                children={
                  <View className="w-full flex-row items-center justify-between mt-[-3px] ">
                    <Image
                      source={NGO}
                      className="h-[143px] w-[85px]"
                    />
                    <Text className="font-interBold text-[24px] text-offWhite pr-[10%]">
                      Instituição
                    </Text>
                  </View>
                }
              />
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
