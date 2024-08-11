import type { Config } from "tailwindcss";

const config = {
    darkMode: ["class"],
    content: [
        "./pages/**/*.{ts,tsx}",
        "./components/**/*.{ts,tsx}",
        "./app/**/*.{ts,tsx}",
        "./src/**/*.{ts,tsx}",
        "./constants/**/*.{ts,tsx}",
    ],
    prefix: "",
    theme: {
        extend: {
            colors: {
                sky: {
                    1: "#f0f9ff",
                    2: "#f0f9ff",
                    3: "#bae6fd",
                    4: "#38bdf8",
                    5: "#0ea5e9",
                    6: "#0284c7",
                    7: "#0369a1",
                    8: "#0c4a6e",
                    9: "#0c4a6e"
                },
                gray: {
                    1: "#f9fafb",
                    2: "#f3f4f6",
                    3: "#e5e7eb",
                    4: "#d1d5db",
                    5: "#9ca3af",
                    6: "#6b7280",
                    7: "#4b5563"
                }
            },

        },
    },
    plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;