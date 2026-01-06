import { View, Text, ScrollView } from "react-native";
import Logo from "../../../assets/svg/Logo.svg";
import Carousel from "react-native-reanimated-carousel";
import { data, dataButtons, dataNGOButtons } from "./data";
import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { ButtonStyle } from "ui/button";
import { useRouter } from "expo-router";
import { getUserRole } from "utils/storage/userStorage";
import { jwtDecode } from "jwt-decode";
import AsyncStorage from "@react-native-async-storage/async-storage";


export function HomeTemplate() {
  const [activeIndex, setActiveIndex] = useState(0);
  const router = useRouter();
  const [username, setUsername] = useState<string | null>(null);
  const [role, setRole] = useState<string | null>(null);
  useEffect(() => {
    async function checkToken() {
      const token = await AsyncStorage.getItem("token");
      if (!token) {
        router.replace("/screens/auth/login");
      }
    }
    checkToken();
  }, []);
  useEffect(() => {
    async function loadRole() {
      const value = await getUserRole();
      setRole(value);
    }
    loadRole();
  }, []);

  useEffect(() => {
    async function decodeToken() {
      const token = await AsyncStorage.getItem("token");
      if (token) {
        const decoded: any = jwtDecode(token);
        setUsername(decoded.username);
        setRole(decoded.role);
      }
    }

    decodeToken();
  }, []);

  return (
    <ScrollView className="bg-black800 flex-1 flex-col ">
      <View className=" pl-5 mt-10 ml-1">
        <Logo width={49} height={25} />
      </View>
      <Text className=" pl-5 font-nourd_bold mb-[75px] text-offWhite text-[20px] pt-[41px] ml-1">
        Bem-vindo de volta,
        <Text className="text-yellow500">{username}</Text>!
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
        <View className=" flex-row w-full flex-wrap gap-5 justify-center pb-[100px]">
          {role === "merchant"
            ? dataButtons.map((item, index) => {
                return index <= 2 ? (
                  <ButtonStyle
                    type={"default"}
                    key={index}
                    children={
                      <View className="bg-lightGray w-full flex-col rounded-[14px] min-w-[26.97%] h-[109px] items-center justify-center gap-[10px]">
                        <item.icon width={41} height={41} />
                        <Text className="text-offWhite text-5 font-nourd_bold">
                          {item.title}
                        </Text>
                      </View>
                    }
                    onPress={() => router.replace(item.path ? item.path : "")}
                  />
                ) : (
                  <ButtonStyle
                    type={"default"}
                    key={index}
                    children={
                      <View
                        className={`bg-lightGray w-full justify-center items-center gap-[10px] rounded-[14px] ${
                          index === 3 ? "min-w-[59.07%%]" : "min-w-[26.97%]"
                        } h-[109px] ${index === 3 ? "flex-row" : "flex-col"} `}
                      >
                        <item.icon width={41} height={41} />
                        <Text className="text-offWhite text-5 font-nourd_bold">
                          {item.title}
                        </Text>
                      </View>
                    }
                    onPress={() => router.replace(item.path ? item.path : "")}
                  />
                );
              })
            : dataNGOButtons.map((item, index) => {
                return index <= 2 ? (
                  <ButtonStyle
                    type={"default"}
                    key={index}
                    children={
                      <View className="bg-lightGray w-full flex-col rounded-[14px] min-w-[26.97%] h-[109px] items-center justify-center gap-[10px]">
                        <item.icon width={41} height={41} />
                        <Text className="text-offWhite text-5 font-nourd_bold">
                          {item.title}
                        </Text>
                      </View>
                    }
                    onPress={() => router.replace(item.path ? item.path : "")}
                  />
                ) : (
                  <ButtonStyle
                    type={"default"}
                    key={index}
                    children={
                      <View
                        className={`bg-lightGray w-full justify-center items-center gap-[10px] rounded-[14px] ${
                          index === 3 ? "min-w-[59.07%%]" : "min-w-[26.97%]"
                        } h-[109px] ${index === 3 ? "flex-row" : "flex-col"} `}
                      >
                        <item.icon width={41} height={41} />
                        <Text className="text-offWhite text-5 font-nourd_bold">
                          {item.title}
                        </Text>
                      </View>
                    }
                    onPress={() => router.replace(item.path ? item.path : "")}
                  />
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
