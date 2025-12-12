import { View, Text, ScrollView } from "react-native";
import Logo from "../../../../assets/svg/Logo.svg";
import { ButtonStyle } from "ui/button";

export default function RequestNgo() {
  return (
    <View className="flex-1 bg-black800 flex-col px-[15px] pt-[55px]">
      <View className="pl-[10px]">
        <Logo width={45} height={28}/>
      </View>
      <Text className="text-offWhite font-nourd_bold text-[24px] mt-[30px] pl-[10px]">
        Solicitações
      </Text>
      <Text className="text-[14px] text-offWhite font-nourd_medium w-[314px] mt-[8px] mb-[70px]">
        Veja as solicitações de doações feitas à sua instituição
      </Text>

      <ScrollView
        className="w-full"
        contentContainerStyle={{ gap: 10, alignItems: "center" }}
        showsVerticalScrollIndicator={false}
      >
        <View className="bg-lightGray rounded-[10px] w-full h-[56px] flex-row justify-between px-5 items-center">
          <Text className="text-offWhite font-nourd_bold text-[12px] w-[200px]">
            O {"["}
            <Text className="text-yellowOrange">Comércio</Text>
            {"]"} quer fazer uma doação para você.
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
      </ScrollView>
    </View>
  );
}
