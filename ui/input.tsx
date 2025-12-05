import { propsInput } from "interface/interfaces";
import { TextInput, View, Text } from "react-native";
import MaterialIcons from "@react-native-vector-icons/material-icons";
import React, { useState } from "react";
import OTPInputView from 'react-native-input-otp'

export function InputStyle({ ...props }: propsInput) {
  const [visibility, setVisibility] = useState(false)
  const [code, setCode] = useState("");
  return (
    <>
      {props.otp ?
        <OTPInputView numInputs={4} inputStyle={{backgroundColor: "#3D3D3D", borderRadius: 10, width:49, height: 49, color: "#FFFFFF"}} keyboardType="decimal-pad" />
        :
        <View>
          {props.label && (
            <Text className="font-interLight text-offWhite text-[14px] mb-[5px]">
              {props.label}
            </Text>
          )}
          {props.icon ? (
            <View className={`min-w-full h-[40px]  ${props.bg === "black" ? "bg-lightGray" : "bg-offWhite"
              } rounded-[6px] px-3 flex-row items-center justify-between`}>
              <TextInput
                className={`text-black800 w-[95%] font-interRegular`}
                keyboardType={props.keyboardType}
                placeholder={props.placeholder}
                placeholderTextColor={props.placeholderColor}
                secureTextEntry={!visibility}


              />

              <MaterialIcons name={visibility ? "visibility" : "visibility-off"} size={18} onPress={() => setVisibility(!visibility)} />
            </View>

          ) : (
            <TextInput
              className={`min-w-full h-[40px] text-black800 font-interRegular ${props.bg === "black" ? "bg-lightGray" : "bg-offWhite"
                } rounded-[6px] px-3`}
              placeholder={props.placeholder}
              placeholderTextColor={props.placeholderColor}
            />
          )}
        </View>
      }
    </>
  );
}
