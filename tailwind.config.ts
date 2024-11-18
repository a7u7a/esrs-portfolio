import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontSize: {
      'hp-sm': '1.2rem',
      'hp-lg': '2rem',
      'hp-xl': '3.5rem',
      'hp-card-m': '0.8rem',
      'hp-card': '0.9rem',
      sm: '0.8rem',
      base: '1rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
    },
    extend: {
      dropShadow: {
        '5': '0 5px 5px rgba(0,0,0,0.50)',
        '10': '0 10px 10px rgba(0,0,0,0.50)',
      },
      fontFamily: {
        sans: ["var(--font-medium)"],
      },
      lineHeight: {
        'tight': '1.2',
        'loose': '1.4',
      },
      colors: {
        'work-button-bg': '#BEBEBE',
        'hp-slide-bg': '#ebebeb',
        'hover-socials': '#8e8e8e',
        'footer-text': '#414141',
        'esrs-text': '#303030',
        'purple': '#7F9DFF',
        'esrs-gray': '#EFEFEF',
        'esrs-hover': '#848484',
        'esrs-dark-gray': '#686868',
        'esrs-black': '#151515',
        'hover': '#686868',
      }
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
export default config;
