import { SafeAreaView, View,Text,Image } from "react-native";
import { ButtonStyle } from "ui/button";
import { InputStyle } from "ui/input";
import Chief from "assets/png/chiefAuth.png";


export function RegisterTemplate() {
    return(
    <SafeAreaView className="bg-black800 flex-1  gap-[94px]">
      <View className="bg-yellowOrange w-[111.63%] h-[205px] rounded-br-[168px] pt-[32px] pl-[21px]">
        <Text className="text-lightGray font-nourd_bold text-[36px]">
          Sua <Text className="text-offWhite">ponte</Text> contra o
          <Text className="bg-offWhite"> desperdício.</Text>
        </Text>
        <View className="relative bottom-[-6px] left-[40%] z-2">
          <Image source={Chief} />
        </View>
      </View>
      <View className="flex-col justify-center flex-1 pl-[35px] pr-[32px]">
        <View className="flex-1 items-start flex-col">
          <Text className="text-[32px] font-nourd_bold text-offWhite mb-[20px]">
            Entrar
          </Text>
          <View className="flex-col gap-[30px]">
            <InputStyle
              keyboardType="email-address"
              label="Email"
              placeholder="Digite seu email..."
              placeholderColor="#A1A1AA"
            />

            <InputStyle
              keyboardType="default"
              label="Senha"
              placeholder="Digite sua senha..."
              placeholderColor="#A1A1AA"
              icon
            />
          </View>
          <View className=" mt-4 mb-[27px] w-full justify-start items-end">
            <ButtonStyle onPress={() => alert("ola")} children={
              <Text className="text-yellowOrange border-b border-b-yellowOrange font-interSemiBold text-[13px]">Esqueceu a senha?</Text>
            } />
          </View>
    
        </View>
      </View>
    </SafeAreaView>
  );
}