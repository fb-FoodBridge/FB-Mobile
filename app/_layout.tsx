import { useAppFonts } from "assets/font/fonts";
import "../global.css";

import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function RootLayout() {
  const fontsLoaded = useAppFonts();

  if (!fontsLoaded) return null;
  return (
    <>
      <StatusBar backgroundColor={"transparent"} />
      <Stack screenOptions={{ headerShown: false }} />
    </>
  );
}
