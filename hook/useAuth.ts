import { useState } from "react";
import type {
  ZodCodeTypes,
  ZodForgotPasswordTypes,
  ZodLoginTypes,
  ZodNewPasswordTypes,
  ZodRegisterTypes,
} from "../validations/ZodValidationsTypes";
import { propsValidateCode } from "interface/interfaces";

export const useAuth = () => {
  const [loginAuth, setLoginAuth] = useState<ZodLoginTypes>({
    email: "",
    password: "",
  });

  const [registerAuth, setRegisterAuth] = useState<ZodRegisterTypes>({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    confirmPassword: "",
    cnpj: "",
  });

  const [forgotPasswordAuth, setForgotPasswordAuth] =
    useState<ZodForgotPasswordTypes>({
      email: "",
    });

  const [codeAuth, setCodeAuth] = useState<ZodCodeTypes>({
    code: ""
  });

  const [newPasswordAuth, setNewPasswordAuth] = useState<ZodNewPasswordTypes>({
    password: "",
    newPassword: "",
  });

  const [loading, setLoading] = useState(false);

  function handleLoginChange(name: keyof ZodLoginTypes, value: string) {
    setLoginAuth((prev) => ({ ...prev, [name]: value }));
  }

  function handleCodeValidate(name: keyof propsValidateCode, value: string) {
    setCodeAuth((prev) => ({ ...prev, [name]: value }));
  }

  function handleNewPassword(name: keyof ZodNewPasswordTypes, value: string) {
    setNewPasswordAuth((prev) => ({ ...prev, [name]: value }));
  }

  function handleForgotPassword(
    name: keyof ZodForgotPasswordTypes,
    value: string
  ) {
    setForgotPasswordAuth((prev) => ({ ...prev, [name]: value }));
  }

  function handleRegisterChange(name: keyof ZodRegisterTypes, value: string) {
    setRegisterAuth((prev) => ({ ...prev, [name]: value }));
  }

  return {
    loginAuth,
    registerAuth,
    handleLoginChange,
    handleRegisterChange,
    loading,
    setLoading,
    forgotPasswordAuth,
    handleForgotPassword,
    codeAuth,
    handleCodeValidate,
    newPasswordAuth,
    handleNewPassword,
  };
};
