import { View } from "react-native";
import React, { useEffect, useState, useCallback } from "react";
import { ButtonStyle } from "ui/button";
import { iconsNavbar, iconsNavbarNGO } from "./data";
import { useRouter, useSegments } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { jwtDecode } from "jwt-decode";
import { decodeToken } from "interface/interfaces";

export function Navbar() {
  const [role, setRole] = useState<string | null>(null);
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const router = useRouter();
  const segments = useSegments();

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
    if (icons.length > 0 && segments.length > 0) {
      const currentSegment = segments[segments.length - 1];
      const matchingIndex = icons.findIndex((icon) => icon.path?.includes(currentSegment));
      if (matchingIndex !== -1) {
        setActiveIndex(matchingIndex);
      }
    }
  }, [segments, icons]);

  const handlePress = useCallback((index: number, path?: string) => {
    setActiveIndex(index);
    if (path) router.push(path);
  }, [router]);

  if (!role) return null;

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