/** @type {import('tailwindcss').Config} */
import tokens from "@avc/foundations/lib/tailwind";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,vue}"],
  theme: {
    extend: { ...tokens },
  },
  plugins: [],
};
