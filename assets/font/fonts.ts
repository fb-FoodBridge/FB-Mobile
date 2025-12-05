import { useFonts as useGoogleFonts, Inter_500Medium, Inter_700Bold, Inter_600SemiBold, Inter_400Regular, Inter_300Light, Inter_800ExtraBold } from "@expo-google-fonts/inter";
import * as Font from "expo-font";
import { useState, useEffect } from "react";

export const useAppFonts = () => {
  const [fontsLoadedGoogle] = useGoogleFonts({
    Inter_500Medium,
    Inter_700Bold,
    Inter_600SemiBold,
    Inter_400Regular,
    Inter_300Light,
    Inter_800ExtraBold
  });

  const [fontsLoadedCustom, setFontsLoadedCustom] = useState(false);

  useEffect(() => {
    const loadCustomFont = async () => {
      await Font.loadAsync({
        "nourd_bold": require("./nourd_bold.ttf"),
        "nourd_heavy": require("./nourd_heavy.ttf"),
      });
      setFontsLoadedCustom(true);
    };
    loadCustomFont();
  }, []);

  return fontsLoadedGoogle && fontsLoadedCustom;
};
