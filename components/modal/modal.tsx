import { useRouter } from "expo-router";
import { View, Text } from "react-native";
import { ButtonStyle } from "ui/button";
import { dataModal } from "./data";
import { InputStyle } from "ui/input";

import React,{useState} from "react"
import { ImageInput } from "ui/imageInputs";

export function Modal() {
  const router = useRouter();
  const [next, setNext] = useState(0)
  const [img, setImg] = useState("")
  return (
    <View className="absolute z-40 justify-center items-center w-full h-full  ">
      <View className="w-[84.42%] rounded-[14px] bg-black800 h-[459px] shadow-shadow-modal pt-[20px] pl-[20px]">
        <View className="flex-row gap-2 items-center">
          <ButtonStyle
            type="GoBack"
            onPress={() => router.replace("/screens/users/merchant/donation")}
          />
          <Text className="font-nourd_bold text-[20px] text-offWhite">
            Crie sua doação!
          </Text>
        </View>
        <View className="w-full items-center mt-[23px]">
          <View className="flex-col gap-[15px] h-auto w-[234px]">
            {dataModal.map((item, index) => {
              const isLast = index === dataModal.length - 1;
              return (
                <View key={index} className="w-full">
                  <InputStyle
                    keyboardType={isLast ? "number-pad" : "default"}
                    placeholder={item.placeholder}
                    label={item.label}
                  />
                  {isLast && (
                    <View className=" flex-row gap-[20px] items-center mt-[20px]">
                      <Text className="text-offWhite font-interRegular text-[14px]">imagem do produto</Text>
                      <ImageInput onChange={setImg} value={img}/>
                    </View>
                  )}
                </View>
              );
            })}
          </View>
        </View>
      </View>
    </View>
  );
}
