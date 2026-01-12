import { useAuth } from "hook/useAuth";
import { propsDataForgotPassword } from "interface/interfaces";
import Toast from "react-native-toast-message";
import { Text } from "react-native";
import { handleCallApi } from "services/handleCallApi";
import { ForgotPassword } from "services/users/password/forgot-password";
import { InputStyle } from "ui/input";
import { ValidateCode } from "services/users/password/validate-code";
import { UpdatePassword } from "services/users/password/update-password";

export function forgotPasswordData({ index }: propsDataForgotPassword) {
  const {
    forgotPasswordAuth,
    handleForgotPassword,
    codeAuth,
    handleCodeValidate,
    newPasswordAuth,
    handleNewPassword,
  } = useAuth();

  const ForgotPasswordCallApi = async () => {
    if (index === 1) {
      const response = await handleCallApi(ForgotPassword, forgotPasswordAuth);
      if (!response.success && (response.fields || response.error)) {
        if (typeof response.error === "string") {
          return Toast.show({
            type: "error",
            text1: response.error,
          });
        } else if (response.fields) {
          const firstFieldError = Object.values(response.fields)[0];
          Toast.show({
            type: "error",
            text1: firstFieldError,
          });
        }
        return false;
      }

      Toast.show({
        type: "success",
        text1: response.message,
      });
      return true;
    }

    if (index === 2) {
      const response = await handleCallApi(ValidateCode, codeAuth);
      if (response.success === false && response.error) {
        if (typeof response.error === "string") {
          return Toast.show({
            type: "error",
            text1: response.error,
          });
        }
        return false;
      }

      Toast.show({
        type: "success",
        text1: response.message,
      });

      return true;
    }

    if (index === 3) {
      const response = await handleCallApi(UpdatePassword, newPasswordAuth);
     if (!response.success && (response.fields || response.error)) {
        if (typeof response.error === "string") {
          return Toast.show({
            type: "error",
            text1: response.error,
          });
        } else if (response.fields) {
          const firstFieldError = Object.values(response.fields)[0];
          Toast.show({
            type: "error",
            text1: firstFieldError,
          });
        }
        return false;
      }

      Toast.show({
        type: "success",
        text1: response.message,
      });

      return true;
    }
  };
  return [
    {
      submit: ForgotPasswordCallApi,
    },
    {
      index: 1,
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
          value={forgotPasswordAuth.email}
          onChange={(value) => handleForgotPassword("email", value)}
          label="Email"
          placeholder="Digite seu email..."
          keyboardType="default"
          placeholderColor="#000"
        />
      ),
      buttonChildren: "Enviar código",
      path: "/screens/auth/password/code",
    },
    {
      index: 2,
      title: (
        <Text className=" font-nourd_heavy text-offWhite text-3xl">
          Código de Verificação
        </Text>
      ),
      description: (
        <Text className="font-interRegular  text-[12px] text-offWhite w-[300px]">
          Digite o código recebido no e-mail vinculado à sua conta e prossiga
          para redefinir sua senha
        </Text>
      ),
      input: (
        <InputStyle
          otp={true}
          onChange={(value) => handleCodeValidate("code", value)}
        />
      ),
      buttonChildren: "Confirmar",
      path: "/screens/auth/password/newPassword",
    },
    {
      index: 3,
      title: (
        <Text className=" font-nourd_heavy text-offWhite text-3xl">
          Digite sua nova senha
        </Text>
      ),
      input: (
        <>
          <InputStyle
            label="Senha"
            value={newPasswordAuth.password}
            onChange={(value) => handleNewPassword("password", value)}
            placeholder="Digite sua senha..."
            keyboardType="default"
            placeholderColor="#000"
            icon
          />

          <InputStyle
            label="Confirmar a senha"
            value={newPasswordAuth.newPassword}
            onChange={(value) => handleNewPassword("newPassword", value)}
            placeholder="Confirme sua senha..."
            keyboardType="default"
            placeholderColor="#000"
            icon
          />
        </>
      ),
      buttonChildren: "Redefinir",
      path: "/screens/auth/login",
    },
  ];
}
