import { View, Text, ScrollView } from "react-native";
import Logo from "../../../../assets/svg/Logo.svg";
import Build from "../../../../assets/svg/icons/card/building.svg";
import { ButtonStyle } from "ui/button";
import React, { useEffect, useState } from "react";
import { Modal } from "../../../../components/modal/modal";
import { Overlay } from "ui/overlay";
import { handleCallApi } from "services/handleCallApi";
import { ListNGO } from "services/users/auth/ngo/listing";
import { ngoList } from "interface/interfaces";
import { ListingDonation } from "services/donation/listing";


export default function Donation() {
  const [active, setActive] = useState(false);
  const [ngoList, setNgoList] = useState<any[]>([]);
  const [ngoId, setNgoId] = useState("")


   async function handleListingNGODonated() {
    return await handleCallApi(ListingDonation, {});
  }


  async function handleListingNGO() {
    return await handleCallApi(ListNGO, {});
  }

  useEffect(() => {
     async function loadNGODonated() {
       await handleListingNGODonated();
     }
     loadNGODonated()
  })

  useEffect(() => {
    async function loadNGO() {
      const response = await handleListingNGO();

      if (response?.success) {
        const data = response.data || [];

        if (Array.isArray(data)) {
          setNgoList(data);
        }
      }
    }
    loadNGO();
  }, []);

  return (
    <View className="flex-1 bg-black800 relative">
      {active && (

          <Overlay button={() => setActive(false)} >
            <Modal button={() => setActive(false)} ngoId={ngoId}  />
          </Overlay>

      )}

      <View className="mt-10 ml-[25px]">
        <Logo width={45} height={25} />
        <Text className="mt-[30px] font-nourd_bold text-[24px] text-offWhite">
          Encontre uma Causa
        </Text>
        <Text className="mt-[8px] mb-[30px] text-[14px] text-offWhite font-nourd_medium w-[314px]">
          Veja quem faz a diferença e saiba como contribuir.
        </Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} className="mx-5">
        {ngoList.length === 0 ? (
          <Text className="text-offWhite text-center mt-10">Carregando...</Text>
        ) : (
          ngoList.map((item: ngoList) => (
            <View
              key={item.id}
              className="bg-lightGray w-full h-[133px] rounded-[14px] pt-[22px] pl-[10px] pr-[38px] mb-5"
            >
              <View className="flex-row gap-[10px]">
                <Build />
                <View className="flex-col gap-[6px]">
                  <Text className="font-interBold text-offWhite text-[16px]">
                    {item.username || "Nome não informado"}
                  </Text>

                  <Text className="font-interRegular text-[12px] text-[#AEAEAE] w-[264px]">
                    {item.description || "Sem descrição disponível."}
                  </Text>
                </View>
              </View>

              <View className="w-full items-end pt-[10px]">
                <ButtonStyle
                  bg="bg-black800"
                  onPress={() => {
                    setActive(!active)
                    setNgoId(item.id)
                  }}
                  type="default"
                  size="w-[75px] h-[25px]"
                >
                  <Text className="text-offWhite text-[14px]">Doar</Text>
                </ButtonStyle>
              </View>
            </View>
          ))
        )}
      </ScrollView>
    </View>
  );
}
