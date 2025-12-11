import { useRouter } from "expo-router";
import { View, Text, ScrollView } from "react-native";
import { ButtonStyle } from "ui/button";
import { dataModal } from "./data";
import { InputStyle } from "ui/input";
import React, { useEffect, useState } from "react";
import MaterialIcons from "@react-native-vector-icons/material-icons";
import { addDonation, Donation, getDonations } from "utils/storage/donaitons";
import { formatDate, formatISODate } from "utils/formatDate";

export function Modal() {
  const router = useRouter();
  const [next, setNext] = useState(false);
  const [donations, setDonations] = useState<Donation[]>([]);
  const [values, setValues] = useState({
    name: "",
    validity: "",
    quantity: "",
  });

  function handleChange(value: string, index: number) {
    if (index === 0) setValues((p) => ({ ...p, name: value }));
    if (index === 1) setValues((p) => ({ ...p, validity: formatDate(value) }));
    if (index === 2)
      setValues((p) => ({ ...p, quantity: value.replace(/[^0-9]/g, "") }));
  }

  async function handleNext() {
    if (!values.name || !values.validity || !values.quantity) {
      console.warn("Preencha todos os campos.");
      return;
    }

    // Adiciona nova doação
    await addDonation({
      title: values.name,
      createdAt: new Date().toISOString(),
      quantity: Number(values.quantity),
    });

    // ⬇️ Atualiza a lista imediatamente
    const updated = await getDonations();
    setDonations(updated);

    // Limpa os inputs
    setValues({ name: "", validity: "", quantity: "" });

    // Agora sim troca a tela depois de salvar
    setNext(true);
  }

  useEffect(() => {
    async function load() {
      const data = await getDonations();
      setDonations(data);
    }
    load();
  }, []);

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
          {next ? (
            <>
               <ScrollView
      className="w-full max-h-[330px] items-center"
      contentContainerStyle={{ gap: 10}}
      showsVerticalScrollIndicator={false}
    >
                {donations.map((item, index) => {
                  return (
                    <View
                      key={index}
                      className="bg-lightGray rounded-[14px] w-[274px] h-[60px]  flex-row justify-between items-center px-5"
                    >
                      <Text className="font-nourd_medium text-[14px] text-offWhite">
                        {item.title}
                      </Text>
                      <Text className="font-nourd_medium text-[14px] text-offWhite">
                        val: {formatISODate(item.createdAt)}
                      </Text>
                    </View>
                  );
                })}
              </ScrollView>
            </>
          ) : (
            <>
              <View className="flex-col gap-[15px] h-auto w-[234px]">
                {dataModal.map((item, index) => {
                  const isLast = index === dataModal.length - 1;
                  return (
                    <View key={index} className="w-full">
                      <InputStyle
                        label={item.label}
                        placeholder={item.placeholder}
                        keyboardType={isLast ? "number-pad" : "default"}
                        value={
                          index === 0
                            ? values.name
                            : index === 1
                            ? values.validity
                            : values.quantity
                        }
                        onChange={(text) => handleChange(text, index)}
                      />
                    </View>
                  );
                })}
              </View>
              <View className="flex-row mt-[42px] w-full items-center justify-end pr-[30px] gap-[20px]">
                <ButtonStyle
                  type={"default"}
                  rouded="rounded-[5px]"
                  bg="bg-lightGray"
                  border="border-2 border-offWhite"
                  size="w-[70px] h-[23px]"
                  children={
                    <MaterialIcons name="add" color={"#FFFFFF"} size={20} />
                  }
                  onPress={function (): void {
                    throw new Error("Function not implemented.");
                  }}
                />
                <ButtonStyle
                  type={"default"}
                  bg="bg-yellowOrange"
                  size="w-[90px] h-[23px]"
                  rouded="rounded-[7px]"
                  children={
                    <Text className="text-offWhite font-interSemiBold">
                      Proximo
                    </Text>
                  }
                  onPress={handleNext}
                />
              </View>
            </>
          )}
        </View>
      </View>
    </View>
  );
}
