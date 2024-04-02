import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      'primary': "#D9F43D",
      bg: {
        "black": "#202124",
        "dark-grey": "#434343"
      },
      'white': "#FFF",
    },
    boxShadow: {
      sm: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 3px 16px 0 rgba(0, 0, 0, 0.06)",
      lg: "0 3px 9px 0 rgba(0, 0, 0, 0.1), 0 8px 40px 0 rgba(0, 0, 0, 0.08)"
    },
    borderRadius: {
      sm: "10px"
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
