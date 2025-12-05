import { useRouter } from "expo-router";
import { SafeAreaView, StatusBar, Text, View } from "react-native";
import { ButtonStyle } from "ui/button";
import Logo from "../../../assets/svg/Logo.svg";
import { data } from "./data";
import { propsTemplate } from "interface/interfaces";
export function ForgotPasswordTemplate({ index, button }: propsTemplate) {
  const router = useRouter();
  return (
    <SafeAreaView className="flex-1 bg-black800 flex-col">
      <StatusBar backgroundColor={"#212121"} />
      <View className="px-[38px]  mt-14 w-full flex-row justify-between items-center">
        <ButtonStyle
          type="GoBack"
          onPress={() => router.replace("/screens/auth/login")}
        />
        <Logo width={45} height={28} />
      </View>
      <View className=" flex-1 px-[38px] mt-[90px]">
        <View className=" gap-[10px]">
          {data[index].title}
          {data[index].description}
        </View>
        <View className="mt-[88px] mb-[72px]">
            {data[index].input}
        </View>
        <ButtonStyle
          type="default"
          bg="bg-lightGray"
          rouded="rounded-[10px]"
          size="h-14"
          onPress={button}
          children={
            <Text className="text-offWhite font-interBold text-4">
              {data[index].buttonChildren}
            </Text>
          }
        />
      </View>
    </SafeAreaView>
  );
}
