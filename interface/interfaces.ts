import { ReactNode } from "react";
import { KeyboardTypeOptions } from "react-native";

export interface propsTemplate {
  index: number;
  button?: () => void;
}

export interface propsDataForgotPassword {
  index: number;
}

export interface propsCloseModal {
  button: () => void;
  children?: ReactNode;
  ngoId?: string;
}

export interface propsModal {
  data: {
    placeholder: string;
    label: string;
  };
}

export interface decodeToken {
  username: string;
  role: string;
  id: string;
  email: string;
}

export interface ngoList {
  id: string;
  username: string;
  description: string;
}

export interface propsButtonStyle {
  type: "GoBack" | "default";
  key?: React.Key;
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
  onChange?: (text: string) => void;
  value?: string;
}

export interface role {
  role: "merchant" | "ngo";
}

export interface propsData<T = unknown> {
  success: boolean;
  message?: string;
  fields?: { [key: string]: string };
  error?: unknown | string;
  data?: T;
}

export interface propsValidateCode {
  code: string;
  error?: string;
}

export interface DonationNgo {
  merchant_id: string;
  ngo_id: string;
  status: "pending" | "completed" | "cancelled";
  username_merchant: string;
}
export interface ListingNgoDonatedResponse {
  data: DonationNgo[];
  error: string;
}

export interface AcceptanceDonation {
  email: string;
  id: string;
}

export interface PendingDonation{
  id:string
}