import { SafeAreaView, View, Text, Image } from "react-native";
import { ButtonStyle } from "ui/button";
import { InputStyle } from "ui/input";
import { useRouter } from "expo-router";
import React, { useState, useEffect } from "react";
import { getUserRole } from "utils/userStorage";
import { useAuth } from "hook/useAuth";
import toast from "react-native-toast-message";
import { propsData } from "interface/interfaces";
import { handleCallApi } from "services/handleCallApi";
import { RegisterMerchant } from "services/users/auth/merchant/register";
import { RegisterNGO } from "services/users/auth/ngo/register";
import { LoginMerchant } from "services/users/auth/merchant/login";
import { LoginNGO } from "services/users/auth/ngo/login";

export function RegisterTemplate() {
  const router = useRouter();
  const [role, setRole] = useState<string | null>(null);
  const { registerAuth, handleRegisterChange, setLoading, loading } = useAuth();
  const [error, setError] = useState<{ [key: string]: string } | undefined>(
    undefined
  );
  useEffect(() => {
    async function loadRole() {
      const value = await getUserRole();
      setRole(value);
    }
    loadRole();
  }, []);

  useEffect(() => {
    if (!error) return;

    const firstMessage = Object.values(error)[0];

    setTimeout(() => {
      toast.show({
        type: "error",
        text1: firstMessage,
      });
    }, 0);
  }, [error]);

  async function handleRegister() {
    if (role === "" || !role) {
      toast.show({
        type: "error",
        text1: "Selecione uma opção de usuário",
      });
      return;
    }

    setLoading(true);

    try {
      let result: propsData;

      if (role === "merchant") {
        result = await handleCallApi(RegisterMerchant, registerAuth);
      } else {
        result = await handleCallApi(RegisterNGO, registerAuth);
      }

      if (!result.success) {
        if (result.fields) {
          setError(result.fields);
          return;
        }

        if (typeof result.error === "string") {
          toast.show({
            type: "error",
            text1: result.error,
          });
          return;
        }

        if (result.message) {
          toast.show({
            type: "error",
            text1: result.message,
          });
          return;
        }

        toast.show({
          type: "error",
          text1: "Erro inesperado",
        });
        return;
      }

      toast.show({
        type: "success",
        text1: result.message,
      });

      if (role === "merchant") {
        result = await handleCallApi(LoginMerchant, registerAuth);
      } else {
        result = await handleCallApi(LoginNGO, registerAuth);
      }

      if (!result.success) {
        if (result.fields) {
          setError(result.fields);
          return;
        }

        if (typeof result.error === "string") {
          toast.show({
            type: "error",
            text1: result.error,
          });
          return;
        }

        if (result.message) {
          toast.show({
            type: "error",
            text1: result.message,
          });
          return;
        }

        toast.show({
          type: "error",
          text1: "Erro inesperado",
        });
        return;
      }

      toast.show({
        type: "success",
        text1: result.message,
      });
      if (role === "merchant") {
        router.replace("/screens/users/merchant/home");
      } else {
        router.replace("/screens/users/ngo/home");
      }
    } catch (error) {
      console.warn(error);
      toast.show({
        type: "error",
        text1: "Erro ao criar conta, tente novamente mais tarde",
      });
    } finally {
      setLoading(false);
    }
  }
  return (
    <SafeAreaView className="bg-black800 flex-1 gap-[14px]">
      <View className="bg-yellowOrange w-[111.63%] h-[170px] rounded-br-[168px] pt-[38px] pl-[38px]">
        <Text className="text-lightGray font-nourd_bold text-[36px] w-[288px]">
          Junte-se à{""}{" "}
          <Text className="bg-offWhite">
            Food<Text className="text-yellowOrange">Bridge</Text>!
          </Text>
        </Text>
      </View>
      <View className="flex-col justify-center flex-1 pl-8 pr-8">
        <View className="flex-1 items-start flex-col">
          <Text className="text-[32px] font-nourd_bold text-offWhite mb-5">
            Cadastro
          </Text>
          <View className="flex-col gap-3 flex-1">
            <View className="flex-row justify-between w-full">
              <View className="w-[150px]">
                <InputStyle
                  value={registerAuth.firstName}
                  onChange={(text) => handleRegisterChange("firstName", text)}
                  keyboardType="default"
                  label="Nome"
                  placeholder="Nome"
                  placeholderColor="#A1A1AA"
                />
              </View>
              <View className="w-[150px] ">
                <InputStyle
                  value={registerAuth.lastName}
                  onChange={(text) => handleRegisterChange("lastName", text)}
                  keyboardType="default"
                  label="Sobrenome"
                  placeholder="Sobrenome"
                  placeholderColor="#A1A1AA"
                />
              </View>
            </View>
            <InputStyle
              value={registerAuth.email}
              onChange={(text) => handleRegisterChange("email", text)}
              keyboardType="email-address"
              label="Email"
              placeholder="Digite seu email..."
              placeholderColor="#A1A1AA"
            />
            <InputStyle
              value={registerAuth.cnpj}
              onChange={(text) => handleRegisterChange("cnpj", text)}
              keyboardType="default"
              label="CNPJ"
              placeholder="Digite seu CNPJ..."
              placeholderColor="#A1A1AA"
            />
            <InputStyle
              value={registerAuth.password}
              onChange={(text) => handleRegisterChange("password", text)}
              keyboardType="default"
              label="Senha"
              placeholder="Digite sua senha..."
              placeholderColor="#A1A1AA"
              icon
            />
            <InputStyle
              value={registerAuth.confirmPassword}
              onChange={(text) => handleRegisterChange("confirmPassword", text)}
              keyboardType="default"
              label="Confirme a Senha"
              placeholder="Confirme sua senha..."
              placeholderColor="#A1A1AA"
              icon
            />
            <View className="mt-2">
              <ButtonStyle
                type="default"
                onPress={handleRegister}
                shadow="shadow-custom-light"
                bg="bg-lightGray"
                children={
                  <Text className="text-offWhite font-interSemiBold text-[16px]">
                    {loading ? "Cadastrando..." : "Cadastrar"}
                  </Text>
                }
                size="h-[53.4px] min-w-full"
                rouded="rounded-[11.12px]"
              />
            </View>

            <View className="w-full mt-1 flex-row justify-center items-center gap-2">
              <View className="w-[90px] bg-offWhite h-[1px]"></View>
              <Text className="text-offWhite font-interExtraBold text-[14px]">
                ou
              </Text>
              <View className="w-[90px] bg-offWhite h-[1px]"></View>
            </View>

            <View className="w-full mt-3 flex-row justify-center items-center">
              <Text className="font-interSemiBold text-4 text-offWhite ">
                Já possui uma conta?{"  "}
              </Text>
              <ButtonStyle
                type="default"
                onPress={() => router.replace("/screens/auth/login")}
                children={
                  <Text className="text-yellowOrange font-interSemiBold text-4 border-b border-b-yellowOrange">
                    Entrar
                  </Text>
                }
              />
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
