import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontSize: {
      sm: '0.8rem',
      base: '1rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-medium)"],
      },
      colors: {
        'esrs-gray': '#EFEFEF',
        'esrs-blue': 'rgb(59 130 246)',
        'esrs-dark-gray': '#686868',
        'esrs-black': '#151515',
      }
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
export default config;
