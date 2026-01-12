import { propsCloseModal } from "interface/interfaces";
import { ButtonStyle } from "./button";
import { View } from "react-native";

export function Overlay({ button, children }: propsCloseModal) {
  return (
    <View className="absolute inset-0 z-20" >
      <ButtonStyle
        direction="absolute"
        size="inset-0"
        bg="bg-black800 opacity-75"
        type="default"
        onPress={button}
      />
      <View className="absolute inset-0 z-30 justify-center items-center">
        {children}
      </View>

    </View>
  );
}
