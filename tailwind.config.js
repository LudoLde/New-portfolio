/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ["./*.{html,js}"],
   theme: {
      extend: {
         screens: {
            mobile: { min: "320px", max: "600px" },
            tablet: { min: "601px", max: "769px" },
            desktop: { min: "1100px", max: "1500px" },
         },

         fontFamily: {
            montserrat: ["Montserrat Alternates"],
            lato: ["Lato"],
         },
      },
   },
   plugins: [],
};
