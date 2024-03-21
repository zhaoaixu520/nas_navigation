import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "home-bg-img": "url('/images/bg.jpg')",
      },
      colors: {
        primary: {
          yellow: "#F6C850",
          back: "rgba(42,42,42,0.42)",
        },
      },
      boxShadow: {
        btn: "2px 3px 7px 7px rgba(0,0,0,0.4)",
      },
    },
  },
  plugins: [],
}
export default config
