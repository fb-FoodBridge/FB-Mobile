import { View, Text, ScrollView } from "react-native";
import Logo from "../../../../assets/svg/Logo.svg";
import React, {useEffect, useState} from "react"
import { ButtonStyle } from "ui/button";
import { decodeToken, DonationNgo } from "interface/interfaces";
import { ListingDonation } from "services/donation/listing";
import { handleCallApi } from "services/handleCallApi";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { jwtDecode } from "jwt-decode";

export default function RequestNgo() {
const [listDonate, setListDonate] = useState<DonationNgo[]>([])
  const [decode, setDecode] = useState<decodeToken | null>(null);
console.log(listDonate)
console.log(listDonate.some((item) => item.ngo_id === decode?.id ))

 async function handleListingDonate() {
    return await handleCallApi(ListingDonation, {});
  }

   useEffect(() => {
    async function loadToken() {
      const token = await AsyncStorage.getItem("token");

      if (!token) {
        return;
      }
      const decoded: decodeToken = jwtDecode(token);
      setDecode(decoded);
    }

    loadToken();
  }, []);

   useEffect(() => {
      async function loadDonate() {
        const response = await handleListingDonate();
        if (response?.success) {
          const data = response.data || [];
  
          if (Array.isArray(data)) {
            setListDonate(data);
          }
        }
      }
      loadDonate();
    }, []);

    if (!decode) {
        return (
          <View className="flex-1 bg-black800 items-center justify-center">
            <Text className="text-offWhite">Carregando...</Text>
          </View>
        );
      }
  return (
    <View className="flex-1 bg-black800 flex-col px-[15px] pt-[55px]">
      <View className="pl-[10px]">
        <Logo width={45} height={28}/>
      </View>
      <Text className="text-offWhite font-nourd_bold text-[24px] mt-[30px] pl-[10px]">
        Solicitações
      </Text>
      <Text className="text-[14px] text-offWhite font-nourd_medium pl-[10px] w-[314px] mt-[8px] mb-[70px]">
        Veja as solicitações de doações feitas à sua instituição
      </Text>

      <ScrollView
        className="w-full pb-[50px]"
        contentContainerStyle={{ gap: 10, alignItems: "center" }}
        showsVerticalScrollIndicator={false}
      >
        { listDonate.filter((item) => item.ngo_id === decode.id ).map((item) => (
      <View key={item.merchant_id} className="bg-lightGray rounded-[10px] w-full h-[56px] flex-row justify-between px-5 items-center">
          <Text className="text-offWhite font-nourd_bold text-[12px] w-[200px]">
            O 
            <Text className="text-yellowOrange">{item.username_merchant}</Text>
            {' '}quer fazer uma doação para você.
          </Text>
          <View className="flex-row gap-[12px]">
            <ButtonStyle
              type={"default"}
              size="w-[71px] h-[29px]"
              bg="bg-yellowOrange"
              children={
                <Text className="text-offWhite text-[12px] font-nourd_bold">
                  Aceitar
                </Text>
              }
              onPress={function (): void {
                throw new Error("Function not implemented.");
              }}
            />

            <ButtonStyle
              type={"default"}
              size="w-[71px] h-[29px]"
              bg="bg-black800"
              children={
                <Text className="text-offWhite text-[12px] font-nourd_bold">
                  Recusar
                </Text>
              }
              onPress={function (): void {
                throw new Error("Function not implemented.");
              }}
            />
          </View>
        </View>
        ))
}
      </ScrollView>
    </View>
  );
}
