import { Text } from "react-native";

export const dataOnboarding = [
  {
    index: 1,
    title: (
      <Text className="font-interBold text-white text-[27.67px]">
        Bem vindo a Food<Text className="text-yellow500">Bridge</Text>
      </Text>
    ),
    description: (
      <Text className="font-interSemiBold text-[15.08px] text-white text-center w-[276px] mt-[21px]">
        Transformando excedentes em 
        <Text className="bg-EcoGreen text-blue h-[19px]">
           {" "}alimento para quem mais precisa.
        </Text>
      </Text>
    ),
    buttonText: "pular"
  },
  {
    index: 2,
    title: (
      <Text className="font-interBold leading-[37.67px] w-[306px] text-center text-white text-[27.67px]">
        Combatendo o <Text className="text-yellow500">desperdício</Text> e a{" "}
        <Text className="text-yellow500">fome</Text>
      </Text>
    ),
    buttonText: "pular"
  },
  {
    index: 3,
    title: (
      <Text className="font-interBold  w-[306px] text-white text-[27.67px]">
        Cada Doação Conta
      </Text>
    ),
    description: <Text className="font-interSemiBold text-white text-[15.08px] w-[251.21px] text-center">Transformando excedentes em alimento para quem mais precisa.</Text>,
    buttonText: "pular"
  },
  {
    index:4,
    title: (
         <Text className="font-interBold  w-[376px] leading-[50px] text-white text-[36px] text-center">
        Em qual lado da ponte você está?
      </Text>
    ),
    description: (
        <Text className="font-interRegular w-[275px] text-center text-14 text-white">Quer doar alimentos ou recebê-los para quem precisa?</Text>
    )
  }
];
