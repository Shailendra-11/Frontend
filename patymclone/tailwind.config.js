/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        Fontext: 'Inter, sans-serif',
      },
      colors:{
          darkblue: '#002970',
          backC :'#e8f8fd',
          blue:'#00baf2',
          gray:'	#909090',
      }
    },

  },
  plugins: [],
}

