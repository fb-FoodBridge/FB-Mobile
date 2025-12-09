import { ReactNode } from "react";
import { KeyboardTypeOptions } from "react-native";

export interface propsTemplate {
  index: number;
  button: () => void;
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
  label?: string;
  bg?: "black" | "white";
  placeholder?: string;
  placeholderColor?: string;
  icon?: boolean;
  keyboardType?: KeyboardTypeOptions;
  onOtpChange?: (text: string) => void;
}

export interface role {
  role: "merchant" | "ngo";
}
