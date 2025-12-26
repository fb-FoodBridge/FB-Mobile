import { ReactNode } from "react";
import { KeyboardTypeOptions, TextInputChangeEvent } from "react-native";

export interface propsTemplate {
  index: number;
  button: () => void;
}

export interface propsClose {
  button: () => void;
  children?: ReactNode;
}

export interface propsModal {
  data:{
    placeholder: string,
    label: string
  } 
}
export interface propsCreateDonation {
  quantity: number;
  products: [
    {
      name: string;
      validity: string;
      quantity: number;
    }
  ]
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
  onChange?:  (text: string) => void;
  value?: string;

}

export interface role {
  role: "merchant" | "ngo";
}

export interface propsData<T = unknown> {
  success: boolean;
  message?: string;
  fields?: { [key: string]: string };
  error?: unknown | string
  data?: T;
}
