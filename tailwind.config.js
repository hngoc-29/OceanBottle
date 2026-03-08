/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [],
    theme: {
        extend: {
            animation: {
                float: "float 6s ease-in-out infinite",
                glow: "glow 3s ease-in-out infinite alternate"
            },
            keyframes: {
                float: {
                    "0%,100%": { transform: "translateY(0px)" },
                    "50%": { transform: "translateY(-10px)" }
                },
                glow: {
                    "0%": { boxShadow: "0 0 10px rgba(255,255,255,0.2)" },
                    "100%": { boxShadow: "0 0 30px rgba(255,255,255,0.6)" }
                }
            }
        }
    },
    plugins: [],
}