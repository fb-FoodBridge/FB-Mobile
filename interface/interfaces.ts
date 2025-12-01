import { ReactNode } from "react";
import { KeyboardTypeOptions } from "react-native";

export interface propsOnboarding {
  index?: number;
  button?: () => void;
  showBackButton?: boolean;
  backAction?: () => void;
}

export interface propsTemplateOnboarding {
  index: number;
}

export interface propsButtonStyle {
  children: ReactNode;
  bg?: string;
  size?: string;
  rouded?: string;
  border?: string;
  margin?: string;
  onPress: () => void;
}


export interface propsCardButton {
  onPress: () => void;
  children: ReactNode;
}

export interface propsInput {
  label: string;
  bg?: "black" | "white";
  placeholder: string;
  placeholderColor: string;
  icon?: boolean;
  keyboardType:KeyboardTypeOptions;
}