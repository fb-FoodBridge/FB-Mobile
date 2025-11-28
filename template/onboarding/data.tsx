import { Text } from "react-native";

export const dataOnboarding = [
  {
    index: 1,
    title: (
      <Text className="font-interBold text-offWhite text-[27.67px]">
        Bem vindo a Food<Text className="text-yellow500">Bridge</Text>
      </Text>
    ),
    description: (
      <Text className="font-interSemiBold text-[15.08px] text-offWhite text-center mt-[21px]">
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
      <Text className="font-interBold leading-[37.67px] w-[306px] text-center text-offWhite text-[27.67px]">
        Combatendo o <Text className="text-yellow500">desperdício</Text> e a{" "}
        <Text className="text-yellow500">fome</Text>
      </Text>
    ),
    buttonText: "pular"
  },
  {
    index: 3,
    title: (
      <Text className="font-interBold text-center w-[306px] text-offWhite text-[27.67px]">
        Cada Doação Conta
      </Text>
    ),
    description: <Text className="font-interSemiBold text-offWhite text-[15.08px] w-[251.21px] text-center">Transformando excedentes em alimento para quem mais precisa.</Text>,
    buttonText: "pular"
  },
 
];
