import Logo from "assets/svg/Logo.svg";
import MaterialIcons from "@react-native-vector-icons/material-icons";
import { Text, View } from "react-native";
import { ButtonStyle } from "ui/button";
import { decodeToken } from "interface/interfaces";
import React, { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";

export default function ProfileTemplate() {
  const [username, setUsername] = useState<string | null>(null);
  const router = useRouter();
  const handleLogoutUser = async () => {
    await AsyncStorage.removeItem("token");
    router.replace("/screens/auth/welcome");
  };

  useEffect(() => {
    async function decodeToken() {
      const token = await AsyncStorage.getItem("token");
      if (token) {
        const decoded: decodeToken = jwtDecode(token);
        setUsername(decoded.username);
      }
    }

    decodeToken();
  }, []);
  return (
    <View className="flex-1 px-[25px] bg-black800">
      <View className="pt-[35px] pb-[43px]">
        <Logo width={49} height={25} />
      </View>
      <View className="flex-1 items-center gap-[110px] flex-col">
        <View className="flex-col gap-[20px] items-center">
          <MaterialIcons name="account-circle" color={"#FFFF"} size={100} />
          <Text className="font-nourd_bold text-[20px] text-yellowOrange">
            {username}
          </Text>
        </View>
        <View className="w-full gap-[20px]">
          <ButtonStyle
            size="w-full h-[60px]"
            bg="bg-lightGray"
            rouded=" rounded-[15px]"
            children={
              <View className="flex-row justify-around items-center w-full">
                <MaterialIcons name="logout" color={"#FFFF"} size={24} />
                <Text className="text-offWhite font-interBold text-[16px]">
                  Sair
                </Text>
                <MaterialIcons
                  name="keyboard-arrow-right"
                  color={"#FFFF"}
                  size={26}
                />
              </View>
            }
            type={"default"}
            onPress={handleLogoutUser}
          />

          <ButtonStyle
            size="w-full h-[60px]"
            bg="bg-lightGray"
            rouded=" rounded-[15px]"
            children={
              <View className="flex-row justify-around items-center w-full">
                <MaterialIcons
                  name="delete-forever"
                  color={"#FF383C"}
                  size={24}
                />
                <Text className="text-[#FF383C] font-interBold text-[16px]">
                  Excluir conta
                </Text>
                <MaterialIcons
                  name="keyboard-arrow-right"
                  color={"#FF383C"}
                  size={26}
                />
              </View>
            }
            type={"default"}
            onPress={function (): void {
              throw new Error("Function not implemented.");
            }}
          />
        </View>
      </View>
    </View>
  );
}
