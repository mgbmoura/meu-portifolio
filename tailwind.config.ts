import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      primaria: "hsl(17 89% 71%)",
      "primaria-texto": "hsl(146 7% 14%)",
      secundaria: "hsl(35 44% 88%)",
      fundo: "hsl(146 7% 14%)",
      card: "hsl(157 6% 19%)",
      "texto-principal": "hsl(35 44% 88%)",
    },
  },
  plugins: [],
};
export default config;
