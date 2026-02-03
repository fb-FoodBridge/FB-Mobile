import { View, Text } from "react-native";
import Logo from "assets/svg/Logo.svg";
import PieChartSvg from "assets/svg/icons/pieChart.svg";
import { PieChart } from "react-native-gifted-charts"
import React,{ useEffect, useState } from "react";
import { handleCallApi } from "services/handleCallApi";
import { ListingDonation } from "services/donation/listing";
import { decodeToken, DonationList } from "interface/interfaces";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { jwtDecode } from "jwt-decode";
import { set } from "node_modules/zod/index.cjs";


export function DashboardTemplate() {
    const [donations, setDonations] = useState<DonationList[] | []>([])
    const [decodedToken, setDecodedToken] = useState<decodeToken | null>(null)
    const [peddingDonations , setPeddingDonations] = useState<number>(0)
    const [rejectedDonations , setRejectedDonations] = useState<number>(0)
    const [acceptedDonations , setAcceptedDonations] = useState<number>(0)
    const data = () => {
        const pieData = [
            { value: acceptedDonations, focused:maxValue === acceptedDonations, color: '#FFB74D' },
            { value: rejectedDonations, focused:maxValue === rejectedDonations, color: '#6CBE77' },
            { value: peddingDonations, focused:maxValue === peddingDonations, color: '#0077B6' }, 
        ];
        return pieData;
    }


    const maxValue = Math.max(acceptedDonations, rejectedDonations, peddingDonations);
 
    useEffect(() => {
        async function getTokenDecoded(){
            const token = await AsyncStorage.getItem('token')
            if(!token) return null
            const decoded = await jwtDecode<decodeToken>(token)
                setDecodedToken(decoded)
                console.log(decoded)
        }
       
        async function handleListDonations(){
            const response = await handleCallApi(ListingDonation, {})
            if(!response.data) return null
                setDonations(response.data)
                console.log(response)
        }
        getTokenDecoded()
        handleListDonations()
    },[])
    useEffect(() => {
                const accpetedDonations = donations.filter(
            donation => (donation.merchant_id === decodedToken?.id || donation.ngo_id === decodedToken?.id) && donation.status === "completed"
        ).length
        setAcceptedDonations(accpetedDonations)
        const pendingDonations = donations.filter(
            donation => (donation.merchant_id === decodedToken?.id || donation.ngo_id === decodedToken?.id) && donation.status === "pending"
        ).length
        setPeddingDonations(pendingDonations)
        const rejectedDonations = donations.filter(
            donation => (donation.merchant_id === decodedToken?.id || donation.ngo_id === decodedToken?.id) && donation.status === "cancelled"
        ).length
        setRejectedDonations(rejectedDonations)

        const teste = donations.some(
            donation => donation.merchant_id=== decodedToken?.id
        )
        console.log("testando ai ACEITO:: " + accpetedDonations)
        console.log("testando ai PENDENTE:: " + pendingDonations)
        console.log("testando ai RECUSADO:: " + rejectedDonations)
        console.log("testando ai TOTAL:: " + teste)
    },[donations])
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
          <View className=" flex w-full items-center">
            { data().length === 0 ? (
              <Text className="text-offWhite mt-10">Sem dados para exibir</Text>
            ) :
            <PieChart
            data={data()}
            innerRadius={60}
            radius={100}
            sectionAutoFocus
            showValuesAsLabels
            textColor="#FFFFFF"
            textSize={12}
            showText
            donut
            innerCircleColor={'#3D3D3D'}
            />
}
          </View>
        </View>
      </View>
    </View>
  );
}
