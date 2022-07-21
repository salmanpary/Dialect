/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize:{
        "heroheading":"3.75rem",
        "faqheading":"3.375rem",
        "cardheading":"3.5rem",
        "footerelements":"0.938rem"
        
      },
      colors:{
        "primary":"#6E6E6C",
        "green":"#00D2BD",
        "blue":"#2246F4",
        "grey":"#6E6E6C",
        'wrappergrey':'#EAF4FC',
        "greyline":"#8896A6",
        "footerblack":"#242424",

        "cardtext":"#757095",
        "bordergrey":"#E9E9E9",
        "faqtext":"#1B1C31",
        "footertext":"#454545"


      },
      screens: {
        "2xl": { max: "1536px" },
        // => @media (max-width: 1535px) { ... }
  
        xl: { max: "1280px" },
        // => @media (max-width: 1279px) { ... }
  
        lg: { max: "1024px" },
        // => @media (max-width: 1023px) { ... }
  
        md: { max: "768px" },
        // => @media (max-width: 767px) { ... }
  
        sm: { max: "640px" },
        card:{max:"576px"}
        // => @media (max-width: 639px) { ... }
      },

    },
  },
  plugins: [],
}
