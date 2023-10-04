/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.jsx"
  ],
  theme: {
    extend: {
      extend:{
        'no.select':{
          userSelect: 'none',
        }
      }
      
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}

