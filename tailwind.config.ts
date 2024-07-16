import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
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
        woodsmoke: "#434347",
        woodsmoke2: "#595961",
        woodsmoke3: "#686972",
        oragnge: "#FFA50B",
        oragnge2: "#BB5302",
        orannge3: "#FFF4C5",
      },
    },
  },
  plugins: [],
};
export default config;
