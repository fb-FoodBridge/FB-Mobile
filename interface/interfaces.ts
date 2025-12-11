import { ReactNode } from "react";
import { KeyboardTypeOptions, TextInputChangeEvent } from "react-native";

export interface propsTemplate {
  index: number;
  button: () => void;
}

export interface propsOverlay {
  button: () => void;
}

export interface propsModal {
  data:{
    placeholder: string,
    label: string
  } 
}

export interface propsButtonStyle {
  type: "GoBack" | "default";
  key?: React.Key
  direction?: string;
  children?: ReactNode;
  bg?: string;
  size?: string;
  rouded?: string;
  border?: string;
  onPress: () => void;
  shadow?: string;

}

export interface propsCardButton {
  onPress: () => void;
  children: ReactNode;
}

export interface propsInput {
  otp?: true;
  label?: ReactNode;
  bg?: "black" | "white";
  placeholder?: string;
  placeholderColor?: string;
  icon?: boolean;
  keyboardType?: KeyboardTypeOptions;
  onChange:  (text: string) => void;
  value: string;

}

export interface role {
  role: "merchant" | "ngo";
}

export interface propsLogin{
  email:string,
  password: string
}
