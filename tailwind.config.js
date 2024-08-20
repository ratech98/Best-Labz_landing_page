/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/**/*.{js,jsx,ts,tsx,html}",

  ],
  theme: {
    extend: {
      fontFamily:{
        ptserif: ['PT+Serif', "sans-serif"],
        trap:['Trap'],
        poppins:['Poppins'],
        poppinsNormel:['PoppinsNormel'],
        helvetica:['Helvetics'],
        redriver: ['Redriver'],
        quicksand: ['Quicksand']
      },
    },
  },
  // darkMode: 'class',
  plugins: [
    require('tailwind-scrollbar')({ preferredStrategy: 'pseudoelements' }),
  ],
}