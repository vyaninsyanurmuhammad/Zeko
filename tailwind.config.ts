import { nextui } from "@nextui-org/react";
import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        "slate-blue": {
          100: "#CDBFF2",
          200: "#C4B4F0",
          300: "#BCAAEE",
          400: "#B49FEC",
          500: "#AB95EA",
          600: "#A38AE8",
          700: "#9B7FE6",
          800: "#9275E4",
          900: "#8A6BE2",
        },
        lime: colors.lime,
        red: colors.red,
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), nextui()],
};
export default config;
