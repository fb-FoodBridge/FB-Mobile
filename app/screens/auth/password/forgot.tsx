import { useRouter } from "expo-router";
import { SafeAreaView, StatusBar, Text, View } from "react-native";
import { ButtonStyle } from "ui/button";
import ArrowBack from "../../../../assets/svg/icons/arrow_yellow.svg";
import Logo from "../../../../assets/svg/Logo.svg";
import { InputStyle } from "ui/input";
export default function ForgotPassword() {
  const router = useRouter();
  return (
    <SafeAreaView className="flex-1 bg-black800 flex-col">
      <StatusBar backgroundColor={"#212121"} />
      <View className="px-[38px]  mt-14 w-full flex-row justify-between items-center">
        <ButtonStyle
          size="w-[39px] h-[39px]"
          rouded="rounded-[10px]"
          bg="bg-lightGray"
          children={
            <ArrowBack width={10} height={17} className="bg-purple-500" />
          }
          onPress={() => router.replace("/screens/auth/login")}
        />
        <Logo width={45} height={28} />
      </View>
      <View className=" flex-1 px-[38px] mt-[90px]">
        <View className=" gap-[10px]">
          <Text className=" font-nourd_heavy text-offWhite text-3xl">
            Esqueceu a senha?
          </Text>
          <Text className="font-interRegular  text-[12px] text-offWhite w-[300px]">
            Não se preocupe! Insira o e-mail associado à sua conta.
          </Text>
        </View>
        <View className="mt-[88px] mb-[72px]">
          <InputStyle label="Email"
          placeholder="Digite seu email..."
          keyboardType="default"
          placeholderColor="#000" />
        </View>
        <ButtonStyle
        bg="bg-lightGray"
        rouded="rounded-[10px]"
        size="h-14"
        onPress={() => alert("ola")}
        children={
            <Text className="text-offWhite font-interBold text-4">Enviar código</Text>
        }
        />
      </View>
    </SafeAreaView>
  );
}
