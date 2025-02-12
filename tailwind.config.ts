import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        caveat: ["var(--font-caveat)", "sanse-serif"],
        plexMono: ["var(--font-plexMono)", "sanse-serif"],
      },
      colors: {
        black: "var(--black)",
        white: "var(--white)",
        blue: "var(--blue)",
        yellow: "var(--yellow)",
      },
    },
  },
  plugins: [],
} satisfies Config;
