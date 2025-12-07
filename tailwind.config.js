/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts}"],
  theme: {
    extend: {
      colors: {
        bg: "#0b1020",
        panel: "#121936",
        panel2: "#0d1431",
        line: "rgba(255,255,255,.08)",
        text: "#e6e9f5",
        muted: "#a9b0c7",
        accent: "#7dd3fc",
        accent2: "#a78bfa"
      },
      boxShadow: {
        soft: "0 10px 30px rgba(0,0,0,.35)"
      },
      borderRadius: {
        xl2: "18px"
      }
    }
  },
  plugins: []
};
