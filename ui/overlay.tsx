import { propsOverlay } from "interface/interfaces";
import { View } from "react-native";
import { ButtonStyle } from "./button";

export function Overlay ({button}:propsOverlay) {
    return(
        <ButtonStyle
        direction="absolute z-20"
        size="w-full h-full"
        bg="bg-black800 opacity-75"
        type="default"
        onPress={button}

        />
    )
}