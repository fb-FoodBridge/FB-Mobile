import { propsTemplateOnboarding } from "interface/interfaces"
import { View } from "react-native"


export function Pagination({ index }: propsTemplateOnboarding){
     return(
        <View className="gap-[10.71px] flex-row">
            <View  className={`${index === 1? "min-w-[26.79px] min-h-[13.39] bg-yellow500 rounded-[22.32px]": "w-[13.39px] h-[13.39px] rounded-[22.32px] bg-[#D2D4D6]"}`}></View>
            <View  className={`${index === 2? "min-w-[26.79px] min-h-[13.39] bg-yellow500 rounded-[22.32px]": "w-[13.39px] h-[13.39px] rounded-[22.32px] bg-[#D2D4D6]"}`}></View>
            <View  className={`${index === 3? "min-w-[26.79px] min-h-[13.39] bg-yellow500 rounded-[22.32px]": "w-[13.39px] h-[13.39px] rounded-[22.32px] bg-[#D2D4D6]"}`}></View>
            <View  className={`${index === 4? "min-w-[26.79px] min-h-[13.39] bg-yellow500 rounded-[22.32px]": "w-[13.39px] h-[13.39px] rounded-[22.32px] bg-[#D2D4D6]"}`}></View>
        </View>
     )
}