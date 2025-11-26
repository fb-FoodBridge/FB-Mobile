import { ReactNode } from "react";

export interface propsOnboarding {
  index: number;
  router?: () => void;
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