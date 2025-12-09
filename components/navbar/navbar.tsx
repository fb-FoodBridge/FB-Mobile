import { View } from "react-native";
import React, { useState } from "react";
import { ButtonStyle } from "ui/button";
import { iconsNavbar } from "./data";
export function Navbar() {
    const [activeIndex, setActiveIndex] = useState<number | null>(0);
  return (
    <View className="w-full items-center">
      <View className="w-[278px] h-[56px] bg-[#09090B] absolute bottom-0 mb-5 z-50 rounded-[16px] flex-row items-center justify-center px-[25px]">
        <View className="justify-between flex-row w-full">
          {iconsNavbar.map((item, index) => {
            const isActive = index === activeIndex
            return (
              <ButtonStyle
                key={index}
                children={isActive ? (
                    <item.active width={25} height={25} />
                  ) : (
                    <item.icon width={21} height={21} />
                  )}
                type={"default"}
                onPress={() => setActiveIndex(index)}
              />
            )
          })}
        </View>
      </View>
    </View>
  );
}
