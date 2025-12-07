/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts}"],
  theme: {
    extend: {
      colors: {
        bg: "#061511",                 // background utama (hijau gelap)
        panel: "#0b2420",              // card utama (deep emerald / teal gelap)
        panel2: "#081d1a",             // card secondary / inner panels
        line: "rgba(255,255,255,.08)",
        text: "#e8fff6",
        muted: "#a7cbbb",
        accent: "#34d399",             // emerald utama
        accent2: "#22c55e"             
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
