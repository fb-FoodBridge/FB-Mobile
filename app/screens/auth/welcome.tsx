import { SafeAreaView, View, Text } from "react-native";
import Logo from "../../../assets/icons/Logo.svg";
import Food from "../../../assets/icons/food.svg";
import { ButtonStyle } from "ui/button";
import ArrowLight from "../../../assets/icons/arrow-white.svg";
import ArrowDark from "../../../assets/icons/arrow-black.svg";
import { useRouter } from "expo-router";

export default function Welcome() {
  const router = useRouter();
  return (
    <SafeAreaView className="flex-1 bg-black800">
      <View className="w-full mt-10 ml-10">
        <Logo width={45} height={28} />
      </View>
      <View className="flex-col gap-[6.4%] items-center justify-center mt-[14.6%]">
        <Food />
        <View className="flex-col justify-center items-center pl-[30px] pr-[30px]">
          <Text className="font-nourd_bold text-[28px] text-offWhite text-center">
            Bem-vindo a Food<Text className="text-yellow500">Bridge</Text>!
          </Text>
          <Text className="text-offWhite text-center font-interLight mt-[30px] text-[18px]">
            Conectamos comércios e ONGs visando reduzir o desperdício e levar
            alimentos a quem mais precisa. Escolha como deseja começar sua
            jornada.
          </Text>

          <View className="flex-row justify-between w-full mt-14">
            <ButtonStyle
              bg="bg-transparent"
              border="border border-offWhite"
              rouded="rounded-[10px]"
              size="w-[166px] h-[67px]"
              children={
                <View className="flex-row items-center justify-center gap-[13px]">
                  <Text className="text-offWhite font-interBold text-[18.66px]">
                    Entrar
                  </Text>
                  <ArrowLight />
                </View>
              }
              onPress={() => router.replace("/screens/auth/login")}
            />
            <ButtonStyle
              bg="bg-offWhite"
              rouded="rounded-[10px]"
              size="w-[166px] h-[67px]"
              children={
                <View className="flex-row items-center justify-center gap-[13px]">
                  <Text className="text-black800 font-interBold text-[18.66px]">
                    Cadastrar
                  </Text>
                  <ArrowDark />
                </View>
              }
              onPress={() => router.replace("/screens/auth/register")}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
