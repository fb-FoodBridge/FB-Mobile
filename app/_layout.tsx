import { useAppFonts } from "assets/font/fonts";
import "../global.css";

import { Stack } from "expo-router";

export default function RootLayout() {
  const fontsLoaded = useAppFonts();

if (!fontsLoaded) return null;
  return <Stack screenOptions={{ headerShown: false }} />;
}
