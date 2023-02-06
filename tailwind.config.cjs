/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: { sans: "Poppins, sans-serif" },
      border: {
        container: "3px solid #fff",
      },
      boxShadow: {
        digitalClock:
          "5px 5px 10px rgba(0,0,0,0.5), inset 5px 5px 20px rgba(255,255,255,0.2), inset -5px -5px 15px rgba(0,0,0,0.75)",
        analogClock:
          "10px 50px 70px rgba(0,0,0,0.25), inset 5px 5px 10px rgba(0,0,0,0.5), inset 5px 5px 20px rgba(255,255,255,0.2), inset -5px -5px 15px rgba(0,0,0,0.75)",
        container:
          "5px 25px 75px rgba(0,0,0,0.75), 10px 50px 70px rgba(0,0,0,0.25), inset 5px 5px 10px rgba(0,0,0,0.5), inset 5px 5px 20px rgba(255,255,255,0.2), inset -5px -5px 15px rgba(0,0,0,0.75) ",
      },
      animation: {
        seconds: "seconds 1s steps(1) infinite",
      },
      keyframes: {
        seconds: {
          "0%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
      },
    },
  },
  plugins: [],
};
