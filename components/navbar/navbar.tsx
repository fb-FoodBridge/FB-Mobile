import { View } from "react-native";
import React, { useEffect, useState } from "react";
import { ButtonStyle } from "ui/button";
import { iconsNavbar, iconsNavbarNGO } from "./data";
import { useRouter } from "expo-router";
import { getUserRole } from "utils/userStorage";
export function Navbar() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);
  const [role, setRole] = useState<string | null>(null);
  useEffect(() => {
    async function loadRole() {
      const value = await getUserRole();
      setRole(value);
    }
    loadRole();
  }, []);

  useEffect(() => {});
  const router = useRouter();
  const handleRouterButton = (index: number, path: string) => {
    setActiveIndex(index);
    return router.replace(path);
  };
  return (
    <View className="w-full items-center">
      <View className="w-[278px] h-[56px] bg-[#09090B] absolute bottom-0 mb-5 z-50 rounded-[16px] flex-row items-center justify-center px-[25px]">
        <View className="justify-between flex-row w-full">
          {role === "merchant"? 
          
          iconsNavbar.map((item, index) => {
            const isActive = index === activeIndex;
            return (
              <ButtonStyle
                key={index}
                children={
                  isActive ? (
                    <item.active width={25} height={25} />
                  ) : (
                    <item.icon width={21} height={21} />
                  )
                }
                type={"default"}
                onPress={() =>
                  handleRouterButton(index, item.path ? item.path : "")
                }
              />
            );
          })
        :
         iconsNavbarNGO.map((item, index) => {
            const isActive = index === activeIndex;
            return (
              <ButtonStyle
                key={index}
                children={
                  isActive ? (
                    <item.active width={25} height={25} />
                  ) : (
                    <item.icon width={21} height={21} />
                  )
                }
                type={"default"}
                onPress={() =>
                  handleRouterButton(index, item.path ? item.path : "")
                }
              />
            );
          })
        }
        </View>
      </View>
    </View>
  );
}
