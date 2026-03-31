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
        primaria: "hsl(var(--primaria))",
        "primaria-texto": "hsl(var(--primaria-texto))",
        secundaria: "hsl(var(--secundaria))",
        fundo: "hsl(var(--fundo))",
        card: "hsl(var(--card))",
        "texto-principal": "hsl(var(--texto-principal))",
      },
    },
  },
  plugins: [],
};
export default config;
