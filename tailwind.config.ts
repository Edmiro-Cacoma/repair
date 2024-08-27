import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
    
      colors: {
        lightBlue: '#2597f4',
        white: '#fff',
        yellow: '#ffff00',
        veryBlackBlue: '#334',
        blackGray: '#777',
        whiteGray: '#f5f5f5',
      },
    },
  },
  plugins: [],
};
export default config;
