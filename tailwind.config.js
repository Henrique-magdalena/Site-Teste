/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "on-background": "#2b2a51",
        "primary": "#0846ed",
        "primary-container": "#859aff",
        "tertiary": "#9c3f00",
        "background": "#f9f5ff",
        "surface": "#f9f5ff",
        "surface-container": "#e9e5ff",
        "surface-container-low": "#f2efff",
        "surface-container-lowest": "#ffffff",
        "surface-container-high": "#e2dfff",
        "outline-variant": "#aba9d7",
        "on-surface": "#2b2a51",
        "on-surface-variant": "#585781",
        "secondary-container": "#cfcdff",
        "on-secondary-container": "#3c38a1",
      },
      fontFamily: {
        headline: ["Plus Jakarta Sans", "sans-serif"],
        body: ["Manrope", "sans-serif"],
        label: ["Be Vietnam Pro", "sans-serif"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        xl: "1.5rem",
      },
    },
  },
  plugins: [],
}
