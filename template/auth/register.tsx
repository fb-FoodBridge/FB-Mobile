import { SafeAreaView, View, Text, Image } from "react-native";
import { ButtonStyle } from "ui/button";
import { InputStyle } from "ui/input";
import { useRouter } from "expo-router";

export function RegisterTemplate() {
  const router = useRouter();
  return (
    <SafeAreaView className="bg-black800 flex-1 gap-[14px]">
      <View className="bg-yellowOrange w-[111.63%] h-[170px] rounded-br-[168px] pt-[38px] pl-[38px]">
        <Text className="text-lightGray font-nourd_bold text-[36px] w-[288px]">
          Junte-se à{""}{" "}
          <Text className="bg-offWhite">
            Food<Text className="text-yellowOrange">Bridge</Text>!
          </Text>
        </Text>
      </View>
      <View className="flex-col justify-center flex-1 pl-8 pr-8">
        <View className="flex-1 items-start flex-col">
          <Text className="text-[32px] font-nourd_bold text-offWhite mb-5">
            Cadastro
          </Text>
          <View className="flex-col gap-3 flex-1">
            <View className="flex-row justify-between w-full">
              <View className="w-[150px]">
                <InputStyle
                  keyboardType="default"
                  label="Nome"
                  placeholder="Nome"
                  placeholderColor="#A1A1AA"
                />
              </View>
              <View className="w-[150px] ">
                <InputStyle
                  keyboardType="default"
                  label="Sobrenome"
                  placeholder="Sobrenome"
                  placeholderColor="#A1A1AA"
                />
              </View>
            </View>
            <InputStyle
              keyboardType="email-address"
              label="Email"
              placeholder="Digite seu email..."
              placeholderColor="#A1A1AA"
            />
            <InputStyle
              keyboardType="default"
              label="CNPJ"
              placeholder="Digite seu CNPJ..."
              placeholderColor="#A1A1AA"
            />
            <InputStyle
              keyboardType="default"
              label="Senha"
              placeholder="Digite sua senha..."
              placeholderColor="#A1A1AA"
              icon
            />
            <InputStyle
              keyboardType="default"
              label="Confirme a Senha"
              placeholder="Confirme sua senha..."
              placeholderColor="#A1A1AA"
              icon
            />
            <ButtonStyle
              type="default"
              margin="mt-2"
              onPress={() => alert("teste")}
              shadow="shadow-custom-light"
              bg="bg-lightGray"
              children={
                <Text className="text-offWhite font-interSemiBold text-[16px]">
                  Cadastrar
                </Text>
              }
              size="h-[53.4px] min-w-full"
              rouded="rounded-[11.12px]"
            />

            <View className="w-full mt-1 flex-row justify-center items-center gap-2">
              <View className="w-[90px] bg-offWhite h-[1px]"></View>
              <Text className="text-offWhite font-interExtraBold text-[14px]">
                ou
              </Text>
              <View className="w-[90px] bg-offWhite h-[1px]"></View>
            </View>

            <View className="w-full mt-3 flex-row justify-center items-center">
              <Text className="font-interSemiBold text-4 text-offWhite ">
                Já possui uma conta?{"  "}
              </Text>
              <ButtonStyle
              type="default"
                onPress={() => router.replace("/screens/auth/login")}
                children={
                  <Text className="text-yellowOrange font-interSemiBold text-4 border-b border-b-yellowOrange">
                    Entrar
                  </Text>
                }
              />
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
