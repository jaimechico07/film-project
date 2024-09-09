/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        //textos
        "primary-100": "#F8F8FF",
        "secondary-100": "#9EA2A8",
        "tertiary-100": "#58DDA3",

        //fondos
        "bg-100": "#1B1B1B",
      },
      backgroundImage: {
        footer: "url('/src/assets/bFooter.png')",
      },
      fontSize: {
        "dynamic-p": "clamp(0.875rem, 0.875rem + 0vw, 0.875rem);",
        "dynamic-a": "clamp(1rem, 0.9286rem + 0.3571vw, 1.25rem);",
        "dynamic-li": "clamp(1rem, 1rem + 0vw, 1rem)",
        "dynamic-h2": "clamp(1.5rem, 1.2143rem + 1.4286vw, 2.5rem);",
        "dynamic-h4": "clamp(1.125rem, 0.9107rem + 1.0714vw, 1.875rem);",
        "dynamic-h6": "clamp(1rem, 0.9286rem + 0.3571vw, 1.25rem);",
      },
      screens: {
        sm: "540px",
        // => @media (min-width: 640px) { ... }

        md: "768px",
        // => @media (min-width: 768px) { ... }

        lg: "1024px",
        // => @media (min-width: 1024px) { ... }

        xl: "1280px",
        // => @media (min-width: 1280px) { ... }

        "2xl": "1440px",
        // => @media (min-width: 1440px) { ... }

        "3xl": "1536px",
        // => @media (min-width: 1536px) { ... }

        "4xl": "1680px",
        // => @media (min-width: 1680px) { ... }
      },
    },
  },
  plugins: [],
};
