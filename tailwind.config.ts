import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/pages/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#05070C",
        panel: "rgba(255,255,255,0.04)",
        panel2: "rgba(255,255,255,0.06)",
        border: "rgba(255,255,255,0.08)",
        purple: {
          400: "#A48BFF",
          500: "#7C6CFF",
          600: "#6A58FF",
        },
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(124,108,255,0.25), 0 0 80px rgba(124,108,255,0.25)",
      },
    },
  },
  plugins: [],
} satisfies Config;
