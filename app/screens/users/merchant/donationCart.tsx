import { ScrollView, Text, View } from "react-native";
import Logo from "../../../../assets/svg/Logo.svg";
import { InputStyle } from "ui/input";
import React, { useEffect, useState } from "react";
import { DonationList } from "interface/interfaces";
import { handleCallApi } from "services/handleCallApi";
import { ListingDonation } from "services/donation/listing";

export default function DonationCart() {
  const [donationsList, setDonationList] = useState<DonationList[]>([]);

  console.log(donationsList)
  useEffect(() => {
    async function LoadDonationList() {
      const response = await handleCallApi(ListingDonation, []);
      console.log(response);
      if (!response.success) {
        const data = response.data || [];
        if (Array.isArray(data)) {
          setDonationList(data);
        }
      }
    }

    LoadDonationList();
  });
  return (
    <View className="flex-1 bg-black800 px-[25px] pt-[35px]">
      <Logo width={49} height={25} />
      <Text className="font-nourd_bold text-[24px] mt-[30px] text-offWhite">
        Carrinho de doações
      </Text>
      <Text className="font-nourd_medium text-[14px] mt-[8px] mb-[15px] text-offWhite ">
        Verifique os dados dos alimentos antes de confirmar a doação.
      </Text>
      <InputStyle
        bg="black"
        icon
        keyboardType="default"
        placeholder="Pesquisar doações"
        placeholderColor="white"
      />
    
    </View>
  );
}
