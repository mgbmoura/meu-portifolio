import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primaria: "#F7A072",
        secundaria: "#F2E2D2",
        fundo: "#222725",
        card: "#2D3431",
        "texto-principal": "#F2E2D2",
        "primaria-texto": "#222725",
        "debug-red": "#ff0000",
      },
    },
  },
  plugins: [],
};
export default config;
