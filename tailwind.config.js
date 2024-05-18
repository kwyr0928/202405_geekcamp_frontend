// tailwindの設定

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      
    },
  },
  plugins: [],

  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        "wobble-hor-bottom": "wobble-hor-bottom 3s ease 2s  both"
      },
      keyframes: {
        "wobble-hor-bottom": {
            "0%,to": {
                transform: "translateX(0%)",
                "transform-origin": "50% 50%"
            },
            "15%": {
                transform: "translateX(-30px) rotate(-6deg)"
            },
            "30%": {
                transform: "translateX(15px) rotate(6deg)"
            },
            "45%": {
                transform: "translateX(-15px) rotate(-3.6deg)"
            },
            "60%": {
                transform: "translateX(9px) rotate(2.4deg)"
            },
            "75%": {
                transform: "translateX(-6px) rotate(-1.2deg)"
            }
        }
     }
    },
  },
  plugins: [],

};

