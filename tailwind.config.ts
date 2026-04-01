import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'class', // Habilita o modo escuro baseado em classe
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: { // Usar extend para adicionar e não substituir as cores padrão
      colors: {
        fundo: 'var(--fundo)',
        card: 'var(--card)',
        primaria: 'var(--primaria)',
        'primaria-texto': 'var(--primaria-texto)',
        secundaria: 'var(--secundaria)',
        'texto-principal': 'var(--texto-principal)',
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)'],
      },
    },
  },
  plugins: [],
};
export default config;
