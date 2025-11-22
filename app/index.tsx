import React, { useEffect, useRef } from "react";

import { SafeAreaView, StatusBar, View, Animated, Easing, Text } from "react-native";
import Logo from "../assets/icons/Logo.svg";
import "../global.css";
import { useRouter } from "expo-router";

export default function Index() {
  const AnimatedView = Animated.createAnimatedComponent(View);
  const router = useRouter();
  let numberScale = 1;
  const scale = useRef(new Animated.Value(numberScale)).current;


  useEffect(() => {
    const anim = Animated.sequence([
      Animated.timing(scale, {
        toValue: 0.5,
        duration: 700,
        easing: Easing.out(Easing.cubic),
        useNativeDriver: true,
      }),
      Animated.delay(200),
      Animated.timing(scale, {
        toValue: 2,
        duration: 700,
        easing: Easing.in(Easing.quad),
        useNativeDriver: true,
      }),
       Animated.delay(1500),
    ]);

    anim.start(() => {
      if (router && typeof router.replace === "function") {
        router.replace("/screens/onboarding/welcome");
      } else {
        console.warn("router.replace is not available yet.");
      }
    });

    return () => anim.stop();
  }, [router, scale]);

  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-black800 ">
      <StatusBar hidden />
      {numberScale !== 0 && (
        <View className="flex-1 bg-yellowOrange relative-[1px] justify-center items-center">
          <AnimatedView
            style={{ transform: [{ scale }], alignItems: "center", justifyContent: "center" }}
            className="items-center justify-center relative "
          >
            <View className="flex justify-center items-center relative z-[1px] w-[812px] h-[804px] rounded-full bg-black800">
            <View className="w-[219px] h-[219px] rounded-full absolute z-[4px]  justify-center items-center">
              <Logo  className="w-[61px] h-[34px]"/>
              <Text  className="text-[20px] text-white font-nourd_bold ">Food<Text className="text-yellow500">Bridge</Text></Text>
            </View>
            </View>
          </AnimatedView>
        </View>
      )}
    </SafeAreaView>
  );
}
