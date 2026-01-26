import { View, Text, ScrollView } from "react-native";
import Logo from "../../../../assets/svg/Logo.svg";
import Build from "../../../../assets/svg/icons/card/building.svg";
import { ButtonStyle } from "ui/button";
import React, { useEffect, useState } from "react";
import { Modal } from "../../../../components/modal/modal";
import { Overlay } from "ui/overlay";
import { handleCallApi } from "services/handleCallApi";
import { ListNGO } from "services/users/ngo/listing";
import { decodeToken, DonationList, ngoList } from "interface/interfaces";
import { ListingDonation } from "services/donation/listing";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { jwtDecode } from "jwt-decode";

export default function Donation() {
  const [active, setActive] = useState(false);
  const [ngoList, setNgoList] = useState<ngoList[]>([]);
  const [ngoListDonated, setNgoListDonated] = useState<DonationList[]>([]);
  const [ngoId, setNgoId] = useState("");
  const [decode, setDecode] = useState<decodeToken | null>(null);

  async function handleListingNGODonated() {
    return await handleCallApi(ListingDonation, {});
  }

  async function handleListingNGO() {
    return await handleCallApi(ListNGO, {});
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
    async function loadNGODonated() {
      const response = await handleListingNGODonated();
      if (response?.success) {
        const data = response.data || [];

        if (Array.isArray(data)) {
          setNgoListDonated(data);
        }
      }
    }
    loadNGODonated();
  }, []);

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

  if (!decode) {
    return (
      <View className="flex-1 bg-black800 items-center justify-center">
        <Text className="text-offWhite">Carregando...</Text>
      </View>
    );
  }

  return (
    <View className="flex-1 bg-black800 relative">
      {active && (
        <Overlay button={() => setActive(false)}>
          <Modal button={() => setActive(false)} ngoId={ngoId} />
        </Overlay>
      )}

      <View className="mt-[35px] ml-[25px]">
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
          ngoList.map((item) => {
              const statusDonated = ngoListDonated.find(data => data.ngo_id === item.id && data.merchant_id === decode?.id)
            const isSameNGO = ngoListDonated.some(
              (data) =>
                data.ngo_id === item.id && data.merchant_id === decode.id
            );
            return (
              <View
                key={item.id}
                className={`bg-lightGray flex-row w-full h-[133px] rounded-[14px] pl-[10px] pr-[38px] mb-5`}
              >
                <View className="pt-[22px] ">
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
                      bg={`${isSameNGO ? "bg-yellowOrange" : "bg-black800"}`}
                      onPress={() => {
                        setActive(!active);
                        setNgoId(item.id);
                      }}
                      type="default"
                      size="w-[75px] h-[25px]"
                    >
                      <Text className="text-offWhite text-[14px]">Doar</Text>
                    </ButtonStyle>
                  </View>
                </View>
                { isSameNGO &&
                <View className=" pt-[10px]">
                  <View className={`rounded-full ${statusDonated?.status === "pending" ? "bg-yellowOrange" : statusDonated?.status === "completed" ? "bg-green-700" : "bg-red-500"} w-[10px] h-[9px]`}></View>
                </View>}
              </View>
            );
          })
        )}
      </ScrollView>
    </View>
  );
}
