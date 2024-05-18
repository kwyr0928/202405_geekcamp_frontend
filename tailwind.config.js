// tailwindの設定

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        "tracking-in-expand":
          "tracking-in-expand 0.5s cubic-bezier(0.215, 0.610, 0.355, 1.000)   both",
        "vibrate-1": "vibrate-1 0.3s linear  infinite both",
        "text-shadow-drop-center": "text-shadow-drop-center 0.6s ease   both",
        "jello-horizontal": "jello-horizontal 0.8s ease   both",
        "wobble-hor-bottom": "wobble-hor-bottom 3s ease 2s  both",
      },
      keyframes: {
        "tracking-in-expand": {
          "0%": {
            "letter-spacing": "-.5em",
            opacity: "0",
          },
          "40%": {
            opacity: ".6",
          },
          to: {
            opacity: "1",
          },
        },
        "vibrate-1": {
          "0%,to": {
            transform: "translate(0)",
          },
          "20%": {
            transform: "translate(-2px, 2px)",
          },
          "40%": {
            transform: "translate(-2px, -2px)",
          },
          "60%": {
            transform: "translate(2px, 2px)",
          },
          "80%": {
            transform: "translate(2px, -2px)",
          },
        },
        "text-shadow-drop-center": {
          "0%": {
            "text-shadow": "0 0 0 transparent",
          },
          to: {
            "text-shadow": "0 0 18px rgba(0, 0, 0, .35)",
          },
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
        "wobble-hor-bottom": {
          "0%,to": {
            transform: "translateX(0%)",
            "transform-origin": "50% 50%",
          },
          "15%": {
            transform: "translateX(-30px) rotate(-6deg)",
          },
          "30%": {
            transform: "translateX(15px) rotate(6deg)",
          },
          "45%": {
            transform: "translateX(-15px) rotate(-3.6deg)",
          },
          "60%": {
            transform: "translateX(9px) rotate(2.4deg)",
          },
          "75%": {
            transform: "translateX(-6px) rotate(-1.2deg)",
          },
        },
      },
    },
  },
  plugins: [],
};
