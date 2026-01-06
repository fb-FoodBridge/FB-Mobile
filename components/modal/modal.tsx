import { useRouter } from "expo-router";
import { View, Text, ScrollView } from "react-native";
import { ButtonStyle } from "ui/button";
import { InputStyle } from "ui/input";
import React, { useEffect, useState } from "react";
import MaterialIcons from "@react-native-vector-icons/material-icons";
import {
  addDonation,
  clearDonations,
  Donation,
  getDonations,
} from "utils/storage/donaitons";
import { propsCloseModal } from "interface/interfaces";
import DateTimePicker from "@react-native-community/datetimepicker";
import Toast from "react-native-toast-message";
import { handleCallApi } from "services/handleCallApi";
import { CreateDonation } from "services/donation/create";
import { getUserRole } from "utils/storage/userStorage";
import AsyncStorage from "@react-native-async-storage/async-storage";

export function Modal({ button, ngoId }: propsCloseModal) {
  const router = useRouter();
  const [next, setNext] = useState(false);

  const [donations, setDonations] = useState<Donation[]>([]);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [date, setDate] = useState<Date | null>(new Date());
  const [values, setValues] = useState({
    name: "",
    quantity: "",
  });
  
  if(!ngoId){
    return null 
  }

  const handleSubmitProducts = async () => {
    const ArrayProducts = await getDonations();

    const response = await handleCallApi(CreateDonation, {ngo_id:ngoId,
      products: ArrayProducts.map((item) => ({
        name: item.title,
        validity: item.validity,
        quantity: item.quantity,
      })),
    });
    console.log(await AsyncStorage.getItem("token"))
    console.log(await getUserRole())
    console.log(response.message)
  };

  async function handleNext() {
    if (!values.name || !date || !values.quantity) {
      Toast.show({
        type: "error",
        text1: "Preencha todos os campos.",
      });
      return;
    }

    await addDonation({
      title: values.name,
      validity: date ? date.toLocaleDateString("pt-BR") : "",
      quantity: Number(values.quantity),
    });

    const updated = await getDonations();
    setDonations(updated);

    setValues({ name: "", quantity: "" });

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
    <View className="z-40 justify-center items-center">
      <View className="w-[84.42%] rounded-[14px] bg-black800 h-[459px] shadow-shadow-modal pt-[20px] pl-[20px]">
        <View className="flex-row gap-2 items-center">
          <ButtonStyle type="GoBack" onPress={button} />
          <Text className="font-nourd_bold text-[20px] text-offWhite">
            Crie sua doação!
          </Text>
        </View>

        <View className="w-full items-center mt-[23px]">
          {next ? (
            <>
              <ScrollView
                className="w-full max-h-[270px]"
                contentContainerStyle={{ gap: 10, alignItems: "center" }}
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
                        val: {item.validity}
                      </Text>
                    </View>
                  );
                })}
              </ScrollView>
              <View className="w-full items-center">
                <View className="w-[274px] border-b border-offWhite"></View>
              </View>
              <View className="flex-row mt-[42px] w-full items-center justify-end pr-[30px] gap-[20px]">
                <ButtonStyle
                  type={"default"}
                  rouded="rounded-[5px]"
                  bg="bg-lightGray"
                  border="border-2 border-offWhite"
                  size="w-[70px] h-[23px]"
                  children={
                    <MaterialIcons name="add" color={"#FFFF"} size={20} />
                  }
                  onPress={() => setNext(false)}
                />
                <ButtonStyle
                  type={"default"}
                  bg="bg-yellowOrange"
                  size="w-[90px] h-[23px]"
                  rouded="rounded-[7px]"
                  children={
                    <Text className="text-offWhite font-interSemiBold">
                      Enviar
                    </Text>
                  }
                  onPress={handleSubmitProducts}
                />
              </View>
            </>
          ) : (
            <>
              <View className="flex-col gap-[15px] h-auto w-[234px]">
                <View className="w-full">
                  <InputStyle
                    label={"Nome do produto:"}
                    placeholder={"digite o nome"}
                    keyboardType={"default"}
                    placeholderColor=""
                    value={values.name}
                    onChange={(value) => {
                      setValues((item) => ({ ...item, name: value }));
                    }}
                  />
                </View>
                <View className="flex-col gap-[5px]">
                  <Text className="font-interLight text-offWhite text-[14px]">
                    Data de vencimento:
                  </Text>
                  <ButtonStyle
                    type={"default"}
                    children={
                      <View className="w-full h-[40px] rounded-lg border bg-offWhite px-3 flex-row items-center justify-between">
                        <Text
                          className={`${
                            date ? "text-black800" : "text-black800/60"
                          } font-interRegular text-[14px]`}
                        >
                          {date && date.toLocaleDateString("pt-BR")}
                        </Text>
                        <MaterialIcons
                          name="calendar-today"
                          size={20}
                          color="#00000099"
                        />
                      </View>
                    }
                    onPress={() => setShowDatePicker(!showDatePicker)}
                  />

                  {showDatePicker && (
                    <DateTimePicker
                      value={date ?? new Date()}
                      mode="date"
                      display="calendar"
                      minimumDate={new Date()}
                      onChange={(event, selectedDate) => {
                        setShowDatePicker(false);
                        if (selectedDate) {
                          setDate(selectedDate);
                        }
                      }}
                    />
                  )}
                </View>
                <View className="w-full">
                  <InputStyle
                    label={"Quantidade:"}
                    placeholder={"digite a quantidade"}
                    keyboardType={"default"}
                    placeholderColor=""
                    value={values.quantity}
                    onChange={(value) => {
                      setValues((item) => ({ ...item, quantity: value }));
                    }}
                  />
                </View>
              </View>
              <View className="flex-row mt-[42px] w-full items-center justify-end pr-[30px] gap-[20px]">
                <ButtonStyle
                  type={"default"}
                  rouded="rounded-[5px]"
                  bg="bg-lightGray"
                  border="border-2 border-offWhite"
                  size="w-[70px] h-[23px]"
                  children={
                    <MaterialIcons name="add" color={"#FFFF"} size={20} />
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
