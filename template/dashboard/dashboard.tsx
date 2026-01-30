import { View, Text } from "react-native";
import Logo from "assets/svg/Logo.svg"

export function DashboardTemplate () {
    return(
        <View className="flex-1 bg-black800">
            <View className="w-full ml-[25px] flex-col gap-[30px] mt-10">
            <Logo width={45} height={45}/>
            <View className="gap-[8px]">
                <Text className="font-nourd_bold text-[24px] text-offWhite"> 
        Impacto Social
                </Text>
                <Text className=" font-nourd_medium text-[14px] text-offWhite  max-w-[314px]">
                    Veja o quanto seu comércio já contribuiu para a sociedade
                </Text>
            </View>
            </View>
        </View>
    )
}