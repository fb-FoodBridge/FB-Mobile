import { useRouter } from "expo-router";
import { SafeAreaView, StatusBar, Text, View } from "react-native";
import { ButtonStyle } from "ui/button";
import Logo from "../../../assets/svg/Logo.svg";
import { forgotPasswordData } from "./data";
import { propsTemplate } from "interface/interfaces";
export function ForgotPasswordTemplate({ index }: propsTemplate) {
  const router = useRouter();
  const data = forgotPasswordData({ index });
  const steps = data[index];
  if (!steps?.path) return null;

  return (
    <SafeAreaView className="flex-1 bg-black800 flex-col">
      <StatusBar backgroundColor={"#212121"} />
      <View className="px-[38px]  mt-14 w-full flex-row justify-between items-center">
        <ButtonStyle
          type="GoBack"
          onPress={() =>
            index === 1
              ? router.replace("/screens/auth/login")
              : index === 2
              ? router.replace("/screens/auth/password/forgot")
              : router.replace("/screens/auth/password/code")
          }
        />
        <Logo width={45} height={28} />
      </View>
      <View className=" flex-1 px-[38px] mt-[90px]">
        <View className="  gap-[10px]">
          {data[index].title}
          {data[index].description}
        </View>
        <View className="mt-[88px] mb-[72px] gap-[30px]">
          {data[index].input}
        </View>
        <ButtonStyle
          type="default"
          bg="bg-lightGray"
          rouded="rounded-[10px]"
          size="h-14"
          onPress={async () => {
            const submit = await data[0].submit?.();
            if(!submit) return
            router.replace(steps.path);
          }}
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
