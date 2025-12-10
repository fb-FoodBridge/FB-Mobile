import React from "react";
import { Pressable, Text,View } from "react-native";
import * as ImagePicker from "expo-image-picker";
import Clips from "../assets/svg/icons/button/img/clips.svg";
import { ButtonStyle } from "./button";


interface ImageInputProps {
  value?: string | null;
  onChange: (uri: string) => void;
}

export function ImageInput({ value, onChange }: ImageInputProps) {
  async function pick() {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
    });

    if (!result.canceled) {
      onChange(result.assets[0].uri);
    }
  }

  return <ButtonStyle
      onPress={pick}
      type="default"
      size="w-[30px] h-[30px]"
      rouded="rounded-[7px]"
      bg="bg-lightGray "
      children={
          <Clips width={17} height={20} />
      }
    />
  ;
}
