/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "#000",
        white: "#fff",
        whitesmoke: "#f1f1f1",
        gray: {
          100: "#212121",
          200: "#101010",
          300: "rgba(16, 16, 16, 0.93)",
          400: "rgba(16, 16, 16, 0.67)",
        },
      },
      fontFamily: {
        inter: "Inter",
        "krona-one": "'Krona One'",
        "inria-sans": "'Inria Sans'",
        "inria-serif": "'Inria Serif'",
        "istok-web": "'Istok Web'",
      },
      borderRadius: {
        sm: "14px",
        smi: "13px",
      },
    },
    fontSize: {
      base: "16px",
      mid: "17px",
      "2xl": "21px",
      smi: "13px",
      lg: "18px",
      "6xl": "25px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
