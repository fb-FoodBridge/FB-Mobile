import { View,Text } from "react-native";
import Logo from "../../assets/svg/Logo.svg"
export function HomeTemplate () {
    return(
        <View className="bg-black800 flex-1 flex-col pl-5">
            <View className="mt-10 ml-1">
                <Logo width={49} height={25}/>
            </View>
            <Text className="font-nourd_bold mb-[75px] text-offWhite text-[20px] pt-[41px] ml-1">
                Bem-vindo de volta, {"["}<Text className="text-yellow500">Nome</Text>{"]"}!
            </Text>
            
        </View>
    )
}