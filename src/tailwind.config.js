import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    darkMode: 'class', // Critical for our manual theme toggle
    theme: {
        extend: {
            colors: {
                // Aesthetic Dark (Deep Slate/Charcoal) - Not pure black
                darkbg: "#0B0C10",
                // Aesthetic Light (Off-white/Cream) - Not pure white
                lightbg: "#F7F7F8",
                primary: {
                    DEFAULT: "#C5A059", // Muted Gold for luxury accent
                    hover: "#B08D45",
                }
            },
            fontFamily: {
                sans: ['var(--font-inter)'],
                arabic: ['var(--font-noto-arabic)'],
            },
            animation: {
                'gradient-x': 'gradient-x 15s ease infinite',
                'fade-in': 'fadeIn 0.5s ease-out forwards',
            },
            keyframes: {
                'gradient-x': {
                    '0%, 100%': {
                        'background-size': '200% 200%',
                        'background-position': 'left center'
                    },
                    '50%': {
                        'background-size': '200% 200%',
                        'background-position': 'right center'
                    },
                },
                fadeIn: {
                    '0%': { opacity: '0', transform: 'translateY(10px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                }
            }
        },
    },
    plugins: [],
};
export default config;