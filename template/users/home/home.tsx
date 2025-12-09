import { View, Text, ScrollView } from "react-native";
import Logo from "../../../assets/svg/Logo.svg";
import Carousel from "react-native-reanimated-carousel";
import { data, dataButtons } from "./data";
import React, { useState } from "react";
import { StyleSheet } from "react-native";
import Svg from "node_modules/react-native-svg/lib/typescript";
export function HomeTemplate() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <ScrollView className="bg-black800 flex-1 flex-col ">
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
                  <Text className="w-[251px]  text-lightGray text-[22px] font-nourd_bold ">
                    {item.title}
                  </Text>
                  <Text className="text-offWhite font-nourd_bold text-[15px]  ">
                    {item.description}
                  </Text>
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
      <View className="flex-1 mx-5    mt-[91px]">
        <View className=" flex-row w-full flex-wrap gap-5 justify-center">
          {dataButtons.map((item, index) => {
            return (
              <>
                {index <= 2 ? (
                  <View
                    key={index}
                    className="bg-lightGray flex-col rounded-[14px] min-w-[26.97%] h-[109px] items-center justify-center gap-[10px]"
                  >
                    <item.icon width={41} height={41} />
                    <Text className="text-offWhite text-5 font-nourd_bold">{item.title}</Text>
                  </View>
                ) : (
                  <View
                    key={index}
                    className={`bg-lightGray justify-center items-center gap-[10px] rounded-[14px] ${ index ===3?"min-w-[59.07%%]" : "min-w-[26.97%]"} h-[109px] ${ index ===3?"flex-row" : "flex-col"} `}
                  >
                    <item.icon width={41} height={41} />
                    <Text className="text-offWhite text-5 font-nourd_bold">{item.title}</Text>
                  </View>
                )}
              </>
            );
          })}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  dotsWrapper: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgb(255,255,255,0.03)",
    height: 27,
    borderRadius: 15,
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
    borderColor: "#3D3D3D",
  },
});
