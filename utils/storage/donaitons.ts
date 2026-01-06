import AsyncStorage from "@react-native-async-storage/async-storage";

const STORAGE_KEY = "@donations";

export interface Donation {
  title: string;
  quantity: number;
  validity: never | string;
}

export async function addDonation(donation: Donation) {
  const stored = await AsyncStorage.getItem(STORAGE_KEY);
  console.log("produto armazenado:", stored)
  const donations: Donation[] = stored ? JSON.parse(stored) : [];

  donations.push(donation);

  await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(donations));
}

export async function getDonations(): Promise<Donation[]> {
  const stored = await AsyncStorage.getItem(STORAGE_KEY);
  console.log("produto resgatado:", stored)
  return stored ? JSON.parse(stored) : [];
}

export async function clearDonations() {
  await AsyncStorage.removeItem(STORAGE_KEY);
}
