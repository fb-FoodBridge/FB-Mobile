import { View, Text } from "react-native";
import Logo from "../../../../assets/svg/Logo.svg";
import Build from "../../../../assets/svg/icons/card/building.svg";
import { ButtonStyle } from "ui/button";
import React, { useState } from "react";
import { Modal } from "components/modal/modal";
import { Overlay } from "ui/overlay";

export default function Donation() {
  const [active, setActive] = useState(false);
  return (
    <View className="flex-1 bg-black800 relative">
      {active && (
        <>
          <Overlay button={() => setActive(!active)} />
             <Modal />
        </>
      )}
      <View className="mt-10 ml-[25px]">
        <Logo width={45} height={25} />
        <Text className="mt-[30px] font-nourd_bold text-[24px] text-offWhite">
          Encontre uma Causa
        </Text>
        <Text className=" mt-[8px] mb-[72px] text-[14px] text-offWhite font-nourd_medium w-[314px]">
          Veja quem faz a diferença e saiba como contribuir.
        </Text>
      </View>
      <View className="mx-5 h-[133px]">
        <View className=" bg-lightGray  w-full h-full rounded-[14px] pt-[22px] pl-[10px] pr-[38px]">
          <View className="flex-row gap-[10px]">
            <Build />
            <View className="flex-col gap-[6px]">
              <Text className="font-interBold text-offWhite text-[16px]">
                Mesa Solidária
              </Text>
              <Text className="font-interRegular text-[12px] text-[#AEAEAE] w-[264px]">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. . .
              </Text>
            </View>
          </View>
          <View className="w-full items-end pt-[10px]">
            <ButtonStyle
              bg="bg-black800"
              onPress={() => setActive(!active)}
              type="default"
              size="w-[75px] h-[25px]"
              children={<Text className="text-offWhite text-[14px]">Doar</Text>}
            />
          </View>
        </View>
      </View>
    </View>
  );
}
