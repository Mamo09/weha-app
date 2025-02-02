import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    darkMode: 'class',
    extend: {
      // Konfigurasi font kustom
      fontFamily: {
        heading: ['Noto Serif Toto', 'serif'],
        body: ['Noto Sans Palmyrene', 'sans-serif'],
      },
      // Konfigurasi warna kustom
      colors: {
        primary: '#a39066',
        secondary: '#ffdf9c',
        accent: '#e6b956',
      },
    },
  },
  plugins: [],
} satisfies Config;
