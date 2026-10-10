/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: "#5546FF",
          dark: "#17143A",
          darker: "#0F0C29",
          light: "#F4F2FF",
          slate: "#282352",
          muted: "#9692BC",
          border: "rgba(255, 255, 255, 0.12)",
        },
        card: {
          lime: "#BFFF0A",
          purple: "#5546FF",
          cyan: "#7FE3FF",
          pink: "#FF7BCA",
          coral: "#FF5A3C",
          yellow: "#FFD426",
        },
      },
      fontFamily: {
        anton: ["var(--font-anton)", "Impact", "sans-serif"],
        bricolage: ["var(--font-bricolage)", "sans-serif"],
        sans: ["var(--font-jakarta)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        "4xl": "2.25rem", // 36px
        "5xl": "3rem",
      },
      animation: {
        marquee: "marquee 28s linear infinite",
        "marquee-reverse": "marquee-reverse 28s linear infinite",
        float: "float 6s ease-in-out infinite",
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        spinSlow: "spin 12s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "marquee-reverse": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
    },
  },
  plugins: [],
};
