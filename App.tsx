import { SafeAreaView, StatusBar, View, Text } from 'react-native';
import "./global.css"
// import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated'; // Comentar temporariamente
import { useEffect } from 'react';
import { useRouter } from 'expo-router';
// import Logo from './assets/icons/Logo.svg'; // Comentar temporariamente

export default function App() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace("/screens/SingIn");
    }, 3000);
    return () => clearTimeout(timer);
  }, []); // Adicionar array de dependências

  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-black">
      <StatusBar hidden />

      <View className="items-center justify-center relative">
        {/* Placeholder para o logo */}
        <Text className="text-white text-4xl font-bold mb-4">FB</Text>
        
        <View className="w-[301px] h-[301px] rounded-full bg-white absolute opacity-[0.14]" />
        <View className="w-[219px] h-[219px] rounded-full bg-white absolute justify-center items-center">
          <Text className="text-black text-2xl font-bold">LOGO</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}