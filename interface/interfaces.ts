import { ReactNode } from "react";
import { KeyboardTypeOptions } from "react-native";


export interface propsTemplate {
  index: number;
  button: () => void
}

export interface propsButtonStyle {
  type : "GoBack" | "default"
  children?: ReactNode;
  bg?: string;
  size?: string;
  rouded?: string;
  border?: string;
  margin?: string;
  onPress: () => void;
  shadow?: string;
  padding?:string
}


export interface propsCardButton {
  onPress: () => void;
  children: ReactNode;
}

export interface propsInput {
  otp?: true;
  label?: string;
  bg?: "black" | "white";
  placeholder?: string;
  placeholderColor?: string;
  icon?: boolean;
  keyboardType?: KeyboardTypeOptions;
}