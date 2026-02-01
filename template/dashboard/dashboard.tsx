import { View, Text } from "react-native";
import Logo from "assets/svg/Logo.svg";
import PieChartSvg from "assets/svg/icons/pieChart.svg";

export function DashboardTemplate() {
  return (
    <View className="flex-1 bg-black800">
      <View className="w-full ml-[25px] flex-col gap-[30px] mt-10">
        <Logo width={45} height={45} />
        <View className="gap-[8px]">
          <Text className="font-nourd_bold text-[24px] text-offWhite">
            Impacto Social
          </Text>
          <Text className=" font-nourd_medium text-[14px] text-offWhite  max-w-[314px]">
            Veja o quanto seu comércio já contribuiu para a sociedade
          </Text>
        </View>
      </View>
      <View className="px-[33px] flex w-full mt-[62px] items-center">
        <View className=" w-full bg-lightGray h-[500px] rounded-[18.77px] ">
          <View className="flex-row gap-[10px] items-center ml-[23px] mt-[23px]">
            <PieChartSvg width={23} height={23} />
            <Text className="font-nourd_bold text-[22px] text-offWhite ">
              Doações
            </Text>
          </View>
          <Text className="font-interRegular text-[15px] ml-[23px] text-offWhite mt-[10px]">
            Veja as estatísticas dos resultados de suas doações
          </Text>
          <View className="flex-col mt-[47px] ml-[23px]">
            <View className="flex-row items-center gap-[11px] mb-[15px] ">
              <View className="flex-row gap-[9px] items-center">
                <View className="rounded-[18.77px] w-[25.35px] h-[12.2px] bg-[#0077B6]"></View>

                <Text className="font-interMedium text-[14px] text-offWhite">Pendente</Text>
              </View>
              <View className="flex-row gap-[10px] items-center">
                <View className="rounded-[18.77px] w-[25.35px] h-[12.2px] bg-[#6CBE77]"></View>

                <Text className="font-interMedium text-[14px] text-offWhite">Recusadas</Text>
              </View>
            </View>
            <View className="flex-row gap-[10px] items-center">
              <View className="rounded-[18.77px] w-[25.35px] h-[12.2px] bg-[#FFB74D]"></View>
              <Text className="font-interMedium text-[14px] text-offWhite">Aceitas</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
