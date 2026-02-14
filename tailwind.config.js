/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(10, 30%, 97%)",
        foreground: "hsl(350, 30%, 20%)",
        primary: "hsl(345, 60%, 50%)",
        secondary: "hsl(20, 40%, 92%)",
        muted: "hsl(15, 25%, 90%)",
        accent: "hsl(340, 70%, 60%)",
        border: "hsl(20, 30%, 88%)",
      },
    },
  },
  plugins: [],
}
