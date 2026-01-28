import Logo from "assets/svg/Logo.svg";
import MaterialIcons from "@react-native-vector-icons/material-icons";
import { Text, View } from "react-native";
import { ButtonStyle } from "ui/button";

export default function Profile() {
  return (
    <View className="flex-1 px-[25px] bg-black800">
      <View className="pt-[35px] pb-[43px]">
        <Logo width={49} height={25} />
      </View>
      <View className="flex-1 items-center gap-[110px] flex-col">
        <View className="flex-col gap-[20px] items-center">
          <MaterialIcons name="account-circle" color={"#FFFF"} size={100} />
          <Text className="font-nourd_bold text-[20px] text-yellowOrange">
            {"[Name]!"}
          </Text>
        </View>
        <View className="w-full">
          <ButtonStyle
            size="w-full h-[60px]"
            bg="bg-lightGray"
            rouded=" rounded-[15px]"
            children={
              <View className="flex-row justify-around items-center w-full">
                <MaterialIcons name="logout" color={"#FFFF"} size={24} />
                <Text className="text-offWhite font-interBold text-[16px]">
                  Sair
                </Text>
                <MaterialIcons
                  name="keyboard-arrow-right"
                  color={"#FFFF"}
                  size={26}
                />
              </View>
            }
            type={"default"}
            onPress={function (): void {
              throw new Error("Function not implemented.");
            }}
          />
        </View>
        <View className="w-full">
            <ButtonStyle
            size="w-full h-[60px]" 
            bg="bg-lightGray"
            rouded=" rounded-[15px]"
            children={
                <View className="flex-row justify-around items-center w-full">
                    <MaterialIcons name="logout" color={"#FFFF"} size={24}/>
                    <Text className="text-offWhite font-interBold text-[16px]">
                      Excluir conta
                    </Text>
                    <MaterialIcons name="keyboard-arrow-right" color={"#FFFF"} size={26}/>
                </View>
            } 
            type={"default"}
            onPress={function (): void {
                      throw new Error("Function not implemented.");
                  } }/>
        </View>
      </View>
    </View>
  );
}
