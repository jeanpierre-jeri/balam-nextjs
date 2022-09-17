/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#E80000',
        secondary: '#1536f7',
        content: '#606060',
        yellow: '#FFE600',
        slate: {
          100: '#F3F3F3',
          200: '#F0F0F0'
        },
        red: {
          100: '#DD0000',
          200: '#CB0000'
        },
        gray: {
          100: '#C7C7C7',
          200: '#5E5E5E',
          300: '#323232'
        },
        night: '#171717',
        blue: {
          100: '#0B2687',
          200: '#081851',
          300: '#0000FF'
        }
      },
      screens: {
        phone: '414px',
        tablet: '768px',
        tabletlg: '960px',
        tabletxl: '1024px',
        laptop: '1200px',
        laptoplg: '1400px',
        desktop: '1700px'
      },
      fontFamily: {
        titles: ['Rajdhani', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
        rubik: ['Rubik', 'sans-serif'],
        yantramanav: ['Yantramanav', 'sans-serif'],
        'dm-sans': ['DM Sans', 'sans-serif']
      }
    }
  },
  plugins: []
}
