import { propsButtonStyle } from "interface/interfaces";
import { Button, Pressable, View } from "react-native";
import ArrowBack from "../assets/svg/icons/arrows/arrow_yellow.svg";

export function ButtonStyle({ ...props }: propsButtonStyle) {
  return (
    <>
      {props.type === "default" ? (
        <Pressable
          
          onPress={props.onPress}
          key={props.key}
          className={`${props.bg}  ${props.size} ${props.direction} ${props.border} ${
            props.rouded ? props.rouded : "rounded-[25.45px]"
          } flex justify-center items-center ${
            props.shadow ? props.shadow : ""
          }`}
        >
          {props.children}
        </Pressable>
      ) : (
        <Pressable
          onPress={props.onPress}
          className={`w-[39px] h-[39px] rounded-[10px] bg-lightGray items-center justify-center`}
        >
          <ArrowBack width={10} height={17} />
        </Pressable>
      )}
    </>
  );
}
