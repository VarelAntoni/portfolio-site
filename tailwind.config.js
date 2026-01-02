/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: {
          950: "#050707",
          900: "#070A0A",
          850: "#0A0F0F",
        },
        surface: {
          1: "rgba(255,255,255,0.04)",
          2: "rgba(255,255,255,0.06)",
          3: "rgba(255,255,255,0.08)",
        },
        stroke: {
          1: "rgba(255,255,255,0.08)",
          2: "rgba(255,255,255,0.12)",
        },
        text: {
          1: "rgba(255,255,255,0.92)",
          2: "rgba(255,255,255,0.74)",
          3: "rgba(255,255,255,0.58)",
        },
        accent: {
          400: "#34d399",
          500: "#10b981",
          600: "#059669",
        },
      },
      boxShadow: {
        soft: "0 12px 40px rgba(0,0,0,0.45)",
        lift: "0 18px 60px rgba(0,0,0,0.55)",
      },
      borderRadius: {
        xl2: "1.25rem",
      },
    },
  },
  plugins: [],
};
