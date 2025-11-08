import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary": "#6a32f7",
        "secondary": "#f33c7c",
        "background-light": "#f8f9fc",
        "background-dark": "#0d101e",
        "surface-dark": "#161b32",
      },
      fontFamily: {
        "display": ["Manrope", "sans-serif"]
      },
      borderRadius: {
        "DEFAULT": "0.25rem",
        "lg": "0.5rem",
        "xl": "1rem",
        "full": "9999px"
      },
      boxShadow: {
        'glow-primary': '0 0 25px rgba(106, 50, 247, 0.5)',
        'glow-secondary': '0 0 25px rgba(243, 60, 124, 0.5)',
      },
    },
  },
  plugins: [],
};
export default config;
