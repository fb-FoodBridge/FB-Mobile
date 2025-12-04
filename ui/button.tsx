import { propsButtonStyle } from "interface/interfaces";
import { Button, Pressable, View } from "react-native";

export function ButtonStyle({...props}:propsButtonStyle){
    return(
        <Pressable
            onPress={props.onPress}
            className={`${props.bg}  ${props.size} ${props.border} ${props.margin} ${props.padding} ${props.rouded? props.rouded : "rounded-[25.45px]" } flex justify-center items-center ${props.shadow? props.shadow : "" }`}
        >
            {props.children}
        </Pressable>
    )
}