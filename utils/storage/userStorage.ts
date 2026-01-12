import AsyncStorage from "@react-native-async-storage/async-storage";
import {jwtDecode} from "jwt-decode"

const USER_ROLE_KEY = "@user_role";

export async function setUserRole(role: string) {
  await AsyncStorage.setItem(USER_ROLE_KEY, role);
}

export async function getUserRole() {
  const role = await AsyncStorage.getItem(USER_ROLE_KEY);
  return role;
}

export async function clearUserRole() {
  await AsyncStorage.removeItem(USER_ROLE_KEY);
}

export async function getEmail(){
  const user = await AsyncStorage.getItem("userEmail")
  return user
}
