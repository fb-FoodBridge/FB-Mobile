/** @type {import('tailwindcss').Config} */
module.exports = {

  content: [
     "./app/**/*.{js,jsx,ts,tsx}",
    "./app/components/**/*.{js,jsx,ts,tsx}",
    "./app/screens/**/*.{js,jsx,ts,tsx}",
    "./template/**/*.{js,jsx,ts,tsx}",
    "./ui/**/*.{js,jsx,ts,tsx}"
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        "nourd_bold": "nourd_bold",
         inter: "Inter_500Medium",
        interBold: "Inter_700Bold",
        interSemiBold: "Inter_600SemiBold",
        interRegular: "Inter_400Regular"
      },
      colors:{
        "black800": "#212121",
        "yellowOrange": "#FFB74D",
        "yellow500": "#FDD835",
        "lightGray": "#3D3D3D",
        "EcoGreen": "#59B666"
      }
    },
  },
  plugins: [],
}