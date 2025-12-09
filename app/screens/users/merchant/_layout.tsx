import { Navbar } from "components/navbar/navbar";
import { Stack } from "expo-router";


export default function UsersLayout() {
  return (
    <>
      
      <Stack screenOptions={{ headerShown: false }} />
      <Navbar />
    </>
  );
}