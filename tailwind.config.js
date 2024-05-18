// tailwindの設定

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        "text-shadow-drop-center": "text-shadow-drop-center 0.6s ease   both",
        "jello-horizontal": "jello-horizontal 0.8s ease   both",
        
      },
      keyframes: {
        "text-shadow-drop-center": {
          "0%": {
              "text-shadow": "0 0 0 transparent"
          },
          to: {
              "text-shadow": "0 0 18px rgba(0, 0, 0, .35)"
          }
      },
        "jello-horizontal": {
          "0%,to": {
            transform: "scale3d(1, 1, 1)",
          },
          "30%": {
            transform: "scale3d(1.25, .75, 1)",
          },
          "40%": {
            transform: "scale3d(.75, 1.25, 1)",
          },
          "50%": {
            transform: "scale3d(1.15, .85, 1)",
          },
          "65%": {
            transform: "scale3d(.95, 1.05, 1)",
          },
          "75%": {
            transform: "scale3d(1.05, .95, 1)",
          },
        },
      },
      
    },
  },
  plugins: [],
};
