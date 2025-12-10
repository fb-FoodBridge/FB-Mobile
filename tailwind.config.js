/** @type {import('tailwindcss').Config} */
module.exports = {

  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./app/screens/**/*.{js,jsx,ts,tsx}",
    "./template/**/*.{js,jsx,ts,tsx}",
    "./ui/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}"
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      boxShadow: {
        "custom-light": "-1px 3px 16.3px rgba(255,255,255,0.25)"
      },
      screens: {
        md: "768px",
        lg: "1080px",
      },
      fontFamily: {
        "nourd_bold": "nourd_bold",
        "nourd_heavy": "nourd_heavy",
        "nourd_medium": "nourd_medium",
        inter: "Inter_500Medium",
        interBold: "Inter_700Bold",
        interSemiBold: "Inter_600SemiBold",
        interRegular: "Inter_400Regular",
        interLight: "Inter_300Light",
        interExtraBold: "Inter_800ExtraBold",
      },
      colors: {
        "black800": "#212121",
        "yellowOrange": "#FFB74D",
        "yellow500": "#FDD835",
        "lightGray": "#3D3D3D",
        "EcoGreen": "#59B666",
        "offWhite": "#FAFAFA",
        "offWhite06": "rgb(250,250,250,0.06)"
      }
    },
  },
  plugins: [],
}