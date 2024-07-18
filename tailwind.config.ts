import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        refine: {
          "0%": {
            left: "0%",
          },
          "100%": {
            left: "100%",
          },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        white: "#FFFFFF",
        black: "#000000",
        slate: "#3B3B3E",
        slate2: "#CFD0D2",
        eminence: "#992E9D",
        eminence2: "#B73BBE",
        eminence3: "#F4D6F8",
        eminence4: "#450D45",
        eminence5: "#FCF5FE",
        eminence6: "#7F2781",
        woodsmoke: "#434347",
        woodsmoke2: "#595961",
        woodsmoke3: "#686972",
        woodsmoke4: "#1B1B1D",
        woodsmoke5: "#374957",
        oragnge: "#FFA50B",
        oragnge2: "#BB5302",
        orannge3: "#FFF4C5",
        orange4: "#FFFCEA",
        blue: "#9849FF",
        blue2: "#841EE3",
      },
      animation: {
        "refine-slide": "refine 3s infinite",
      },
    },
  },
  plugins: [],
};
export default config;
