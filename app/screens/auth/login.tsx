import { SafeAreaView, View, Text, Image } from "react-native";
import Chief from "assets/png/chiefAuth.png";
import { InputStyle } from "ui/input";
import { ButtonStyle } from "ui/button";
import { useRouter } from "expo-router";
import React, {useEffect, useState} from "node_modules/@types/react";
import { getUserRole } from "utils/userStorage";

export default function Login() {
  const router = useRouter();
   const [role, setRole] = useState<string | null>(null);

  useEffect(() => {
    async function loadRole() {
      const value = await getUserRole();
      setRole(value);
    }
    loadRole();
  }, []);
    if (!role) return null
  return (
    <SafeAreaView className="bg-black800 flex-1  gap-20">
      <View className="bg-yellowOrange w-[111.63%] h-[205px] rounded-br-[168px] pt-8 pl-[21px] relative">
        <Text className="text-lightGray font-nourd_bold text-[36px]">
          Sua <Text className="text-offWhite">ponte</Text> contra o{" "}
          <Text className="bg-offWhite">desperdício.</Text>
        </Text>
        <View className="absolute bottom-[-11%] left-[33%] z-2">
          <Image source={Chief} />
        </View>
      </View>
      <View className="flex-col flex-1 pl-[35px] pr-[32px]">
        <View className="flex-1 flex-col">
          <Text className="text-[32px] font-nourd_bold text-offWhite mb-[20px]">
            Entrar
          </Text>
          <View className="flex-col gap-[30px]">
            <InputStyle
              keyboardType="email-address"
              label="Email"
              placeholder="Digite seu email..."
              placeholderColor="#A1A1AA"
            />

            <InputStyle
              keyboardType="default"
              label="Senha"
              placeholder="Digite sua senha..."
              placeholderColor="#A1A1AA"
              icon
            />
          </View>
          <View className=" mt-4 mb-[27px] w-full justify-start items-end">
            <ButtonStyle
            type="default"
             onPress={() => router.replace("/screens/auth/password/forgot")} children={
              <Text className="text-yellowOrange border-b border-b-yellowOrange font-interSemiBold text-[13px]">Esqueceu a senha?</Text>
            } />
          </View>
          <ButtonStyle
          type="default"
           onPress={() => router.replace("/screens/users/merchant/home")} shadow="shadow-custom-light " size="w-full h-[53px]" bg="bg-lightGray" border="border border-offWhite06" rouded="rounded-[11.12px]" children={
            <Text className="text-offWhite font-interSemiBold text-[16px]">Entrar</Text>
          } />

          <View className="w-full mt-[29px] flex-row justify-center items-center gap-2">
            <View className="w-[90px] bg-offWhite h-[1px]"></View>
            <Text className="text-offWhite font-interExtraBold text-[14px]">
              ou
            </Text>
            <View className="w-[90px] bg-offWhite h-[1px]"></View>
          </View>
          <View className="w-full mt-[29px] flex-row justify-center items-center">
            <Text className="font-interSemiBold text-4 text-offWhite ">Ainda não tem uma conta?</Text>
            <ButtonStyle
            type="default"
             onPress={() => router.replace("/screens/auth/register")} children={
              <Text className="text-yellowOrange font-interSemiBold text-4 border-b border-b-yellowOrange">
                {" "}Cadastre-se!
              </Text>
            } />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
