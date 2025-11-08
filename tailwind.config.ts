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
        "primary": "#607AFB",
        "secondary": "#f33c7c",
        "background-light": "#f5f6f8",
        "background-dark": "#0f1323",
        "surface-dark": "#161b32",
      },
      fontFamily: {
        "display": ["Manrope", "sans-serif"]
      },
      borderRadius: {
        "DEFAULT": "0.25rem",
        "lg": "0.5rem",
        "xl": "0.75rem",
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
