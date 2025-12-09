import { Text } from "react-native";
import { InputStyle } from "ui/input";

export const data = [
  {
    index: 0,
    title: (
      <Text className=" font-nourd_heavy text-offWhite text-3xl">
        Esqueceu a senha?
      </Text>
    ),
    description: (
      <Text className="font-interRegular  text-[12px] text-offWhite w-[300px]">
        Não se preocupe! Insira o e-mail associado à sua conta.
      </Text>
    ),
    input: (
      <InputStyle
        
        label="Email"
        placeholder="Digite seu email..."
        keyboardType="default"
        placeholderColor="#000"
      />
    ),
    buttonChildren: "Enviar código",
  },
  {
    index: 1,
    title: (
      <Text className=" font-nourd_heavy text-offWhite text-3xl">
        Código de Verificação
      </Text>
    ),
    description: (
      <Text className="font-interRegular  text-[12px] text-offWhite w-[300px]">
        Digite o código recebido no e-mail vinculado à sua conta e prossiga para
        redefinir sua senha
      </Text>
    ),
    input:(
      <InputStyle otp={true} />
    ),
    buttonChildren: "Confirmar",
  },
  {
    index: 2,
    title: (
      <Text className=" font-nourd_heavy text-offWhite text-3xl">
        Digite sua nova senha
      </Text>
    ),
    input: (
      <>
        <InputStyle
          label="Senha"
          placeholder="Digite sua senha..."
          keyboardType="default"
          placeholderColor="#000"
          icon
        />

        <InputStyle
          label="Confirmar a senha"
          placeholder="Confirme sua senha..."
          keyboardType="default"
          placeholderColor="#000"
          icon
        />
      </>
    ),
    buttonChildren: "Redefinir",
  },
];
