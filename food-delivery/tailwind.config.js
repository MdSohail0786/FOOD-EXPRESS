/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        navbar: "#4CAF50", // Olive Green
        button: "#D35400", // Burnt Orange
        background: "#FAF9F6", // Ivory White
        footer: "#6E3B3B", // Chocolate Brown
        foodCardBg: "#FFFFFF", // White for food cards
      },
      boxShadow: {
        foodCard: "0 2px 8px rgba(0, 0, 0, 0.1)", // subtle shadow for food cards
      },
    },
  },
  plugins: [],
};
