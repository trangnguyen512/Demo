/** @type {import('tailwindcss').Config} */

// const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './src/features/**/*.{js,ts,jsx,tsx}',
    './src/layout/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bg-main': "url('./public/Main/mainbackgroud.png')",
      },
      colors: {
        primary: '#474747',
        secondary: {
          light: '#f3ca8d',
          DEFAULT: 'rgba(205, 158, 71, 1)',
          dark: '#CD9E47',
          medium: '#E2BB73',
        },
        blue_night: {
          DEFAULT: '#00237B',
          dark: '#011342',
          light: 'rgba(65, 96, 174, 1)',
        },
        pastel: '#D3D9E9',
        yellow_light: '#FFECBB',
        txt_white: '#fff',
      },
      fontFamily: {
        zenkaku: ['Zenkaku'],
        bulter_regular: ['bulter-regular'],
        bulter_light: ['bulter-light'],
        bulter_bold: ['bulter-bold'],
        bulter_medium: ['bulter-medium'],
      },
      fontSize: {
        big_title: '80px',
        title: '25px',
        md_title: '45px',
        lg_title: '50px',
        xl_title: '45px',
        size_regular: '14px',
        md_size_regular: '18px',
        lg_size_regular: '24px',
        primary_text: '1.2rem',
        name_size: '50px',
        sm_text: '13px',
        xl_size: '20px',
        des_size: '15px',
        banner_size: '28px',
        xl_name: '60px',
        size_pcmd: '32px',
        size_pclg: '40px',
      },
      gridTemplateRows: {
        8: 'repeat(8, minmax(0, 1fr))',
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio'),
  ],
};
