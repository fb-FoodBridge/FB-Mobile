import { SafeAreaView, View, Text, Image } from "react-native";
import Chief from "assets/png/chiefAuth.png";
import { InputStyle } from "ui/input";
import { ButtonStyle } from "ui/button";
import { useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import { useAuth } from "hook/useAuth";
import { LoginMerchant } from "../../../services/users/auth/merchant/login";
import { handleCallApi } from "services/handleCallApi";
import { propsData } from "interface/interfaces";
import toast from "react-native-toast-message";
import { LoginNGO } from "services/users/auth/ngo/login";

export default function Login() {
  const router = useRouter();
  const { loginAuth, handleLoginChange, loading, setLoading } = useAuth();
  async function handleLogin() {
    try {
      const result: propsData = await handleCallApi(LoginMerchant, loginAuth);

      if (!result.success && (result.fields || result.error)) {
        if (typeof result.error === "string") {
          toast.show({
            type: "error",
            text1: result.error,
          });
          console.log(result.error);
        }
        return;
      }
      toast.show({
        type: "success",
        text1: result.message,
      });
      router.replace("/screens/users/merchant/home")
    } catch (error) {
      console.warn(error);
      try {
        const result:propsData = await handleCallApi(LoginNGO, loginAuth);

        if (!result.success && (result.fields || result.error)) {
          if (typeof result.error === "string") {
            toast.show({
              type: "error",
              text1: result.error,
            });
          }
          return;
        }
        toast.show({
          type: "success",
          text1: result.message,
        });
        router.replace("/screens/users/ngo/home")
      } catch (error) {
        console.warn(error);
      }
    } finally {
      setLoading(false);
    }
  }

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
              onChange={(value) => handleLoginChange("email", value)}
              value={loginAuth.email}
            />

            <InputStyle
              onChange={(value) => handleLoginChange("password", value)}
              value={loginAuth.password}
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
              onPress={() => router.replace("/screens/auth/password/forgot")}
              children={
                <Text className="text-yellowOrange border-b border-b-yellowOrange font-interSemiBold text-[13px]">
                  Esqueceu a senha?
                </Text>
              }
            />
          </View>
          <ButtonStyle
            type="default"
            onPress={handleLogin}
            shadow="shadow-custom-light "
            size="w-full h-[53px]"
            bg="bg-lightGray"
            border="border border-offWhite06"
            rouded="rounded-[11.12px]"
            children={
              <Text className="text-offWhite font-interSemiBold text-[16px]">
                {loading ? "Entrando..." : "Entrar"}
              </Text>
            }
          />

          <View className="w-full mt-[29px] flex-row justify-center items-center gap-2">
            <View className="w-[90px] bg-offWhite h-[1px]"></View>
            <Text className="text-offWhite font-interExtraBold text-[14px]">
              ou
            </Text>
            <View className="w-[90px] bg-offWhite h-[1px]"></View>
          </View>
          <View className="w-full mt-[29px] flex-row justify-center items-center">
            <Text className="font-interSemiBold text-4 text-offWhite ">
              Ainda não tem uma conta?
            </Text>
            <ButtonStyle
              type="default"
              onPress={() => router.replace("/screens/auth/register")}
              children={
                <Text className="text-yellowOrange font-interSemiBold text-4 border-b border-b-yellowOrange">
                  {" "}
                  Cadastre-se!
                </Text>
              }
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
