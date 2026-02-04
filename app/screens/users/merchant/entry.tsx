import { View, Text, ScrollView } from "react-native";
import Logo from "assets/svg/Logo.svg"
import { ButtonStyle } from "ui/button";
import MaterialIcons from "@react-native-vector-icons/material-icons";
export default function EntryMerchant() {
    return (
        <View className="flex-1 bg-black800 px-[25px] ">
            <View className="mt-10 flex-row items-center justify-between w-full">
                <ButtonStyle type={"GoBack"} onPress={() => { }} />
                <Logo width={45} height={45} />
            </View>
            <View className="flex-row items-center mt-9 gap-[11px]">
                <Text className="text-offWhite font-nourd_bold text-[24px]">Notificações</Text>
                <MaterialIcons name="notifications" size={24} color="white" />
            </View>
            <ScrollView className="mt-[30px] px-[10px]" showsVerticalScrollIndicator={false} >
                <View className=" gap-[5px] ">
                    <Text className="font-interRegular text-[16px] text-offWhite">
                        Solicitação de doação! - {"[data]"}
                    </Text>
                    <View className="w-full h-[105px] bg-lightGray rounded-[14px] items-center pl-[18px] flex-row gap-[15px]">
                        <View className="bg-black w-[55px] h-[51px] justify-center items-center rounded-[11px]">
                            <Logo width={40} height={40} />
                        </View>
                        <Text className="font-interRegular text-[16px] text-offWhite text-wrap max-w-[190px]">
                            Você recusou a doação de [instituição]!
                        </Text>
                    </View>
                </View>

            </ScrollView>
        </View>
    )
}