import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx,css}', 
  ],
  theme: {
    extend: {
      colors: {
        primary: "#A388EE",
        secundary: "#2FFF2F",
        auxiliar:"#3300FF"
      },
    },
  },
  plugins: [],
}
export default config

 
 