import { View, Text } from "react-native";
import Logo from "../../../assets/svg/Logo.svg";
import Carousel from "react-native-reanimated-carousel";
import { data } from "./data";
import React, { useState } from "react";
import { StyleSheet } from "react-native";
export function HomeTemplate() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <View className="bg-black800 flex-1 flex-col ">
      <View className=" pl-5 mt-10 ml-1">
        <Logo width={49} height={25} />
      </View>
      <Text className=" pl-5 font-nourd_bold mb-[75px] text-offWhite text-[20px] pt-[41px] ml-1">
        Bem-vindo de volta, {"["}
        <Text className="text-yellow500">Nome</Text>
        {"]"}!
      </Text>
      <View className="w-full justify-center items-center gap-[69px] flex-col">
        <View
          style={{
            width: 295,
            height: 386,
            borderRadius: 19,
          }}
          className="bg-lightGray rounded-[19px] "
        >
          <Carousel
            width={295}
            height={388}
            pagingEnabled
            style={{
              borderRadius: 19,
              position: "relative",
              zIndex: 20,
              right: 19,
              bottom: -15,
            }}
            autoPlay
            autoPlayInterval={1500}
            data={data}
            onSnapToItem={(i) => setActiveIndex(i)}

            renderItem={({ item }) => (
              <View className="bg-yellowOrange w-full h-full flex-col items-center gap-[20px] ">
                <View className="mt-4">{item.img}</View>
                <View className="gap-[10px] justify-start w-full pl-[20px]">
                  <Text className="w-[251px]  text-lightGray text-[22px] font-nourd_bold ">{item.title}</Text>
                  <Text className="text-offWhite font-nourd_bold text-[15px]  ">{item.description}</Text>
                </View>
              </View>
            )}
          />
        </View>
        <View style={[styles.dotsWrapper]}>
          {data.map((_, i) => (
            <View
              key={i}
              style={i === activeIndex ? styles.activeDot : styles.dot}
            />
          ))}
        </View>
      </View>
      <View>
        
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  dotsWrapper: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgb(255,255,255,0.03)",
    height:27,
    borderRadius:15
  },
  dot: {
    backgroundColor: "#3D3D3D",
    width: 12,
    height: 12,
    borderRadius: 999,
    marginHorizontal: 6,
      },
  activeDot: {
    backgroundColor: "#FDD835",
    width: 26,
    height: 12,
    borderRadius: 999,
    marginHorizontal: 6,
    borderColor: "#3D3D3D"

  },
});
