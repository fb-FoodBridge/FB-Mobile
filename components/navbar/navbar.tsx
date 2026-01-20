import { View } from "react-native";
import React, { useEffect, useState } from "react";
import { ButtonStyle } from "ui/button";
import { iconsNavbar, iconsNavbarNGO } from "./data";
import { useRouter } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { jwtDecode } from "jwt-decode";
import { decodeToken } from "interface/interfaces";
import { useNavigationState } from "@react-navigation/native";

export function Navbar() {
   const [role, setRole] = useState<string | null>(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const router = useRouter();
  const initialized = React.useRef(false);

  const icons = role === "merchant" ? iconsNavbar : iconsNavbarNGO;

  useEffect(() => {
    async function loadRole() {
      const token = await AsyncStorage.getItem("token");
      if (token) {
        const decoded: decodeToken = jwtDecode(token);
        setRole(decoded.role);
      }
    }
    loadRole();
  }, []);

 
  useEffect(() => {
    if (role && !initialized.current) {
      setActiveIndex(0);
      initialized.current = true;
    }
  }, [role]);

  const handlePress = (index: number, path?: string) => {
    setActiveIndex(index);
    if (path) router.replace(path);
  };

  if (!role || activeIndex === null) return null;

  return (
    <View className="w-full items-center">
      <View className="w-[278px] h-[56px] bg-[#09090B] absolute bottom-0 mb-5 z-50 rounded-[16px] flex-row items-center justify-center px-[25px]">
        <View className="justify-between flex-row w-full">
          {icons.map((item, index) => {
            const isActive = index === activeIndex;

            return (
              <ButtonStyle
                key={index}
                type="default"
                onPress={() => handlePress(index, item.path)}
              >
                {isActive ? (
                  <item.active width={25} height={25} />
                ) : (
                  <item.icon width={21} height={21} />
                )}
              </ButtonStyle>
            );
          })}
        </View>
      </View>
    </View>
  );
}