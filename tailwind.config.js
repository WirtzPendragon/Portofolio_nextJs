/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background",
        foreground: "var(--foreground)",
        primary: "#FFFCFC",
        appGreen: {
          900:"#213E22",
          500:"#577D26",
        },
        appOrange: {
          500:"#FFA310",
          200:"#FFCD4B",
        },
      },
      fontFamily:{
        inter:["font-inter"],
      },
    },
  },
  plugins: [],
};
