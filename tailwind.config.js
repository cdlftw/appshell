/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customblue: '#238be6', // Your custom color
        customgray: "#191a23",
        customgrayhover: "#272939",
        customgrayhoverdark: "#1c1d2a",
        customgrayhoverlight: "#212234",
        cusinputbg: "#20212e",
        cusbuttongray: "#2c2d3c",
        cusdialogbg: "#262631",
        cusdialogelement: "#323244",
        cusdarktxt: "#6a687e",
        cusbuttonbackground: "#21232e",
        cusbuttonoutline: "#313248",
        cuslisthover: "#1c1d2a",
        cusoffwhite: "#e2e2e2",
        cusalmostwhite: "#eeeffc",
        cusdarkmenubg: "#262630",
        cusdarkmenuselected: "#31313E",
      },
      fontSize: {
        'xxs': '0.5rem',
        'xs': '0.75rem', // 12px
        'sm': '0.8125rem', // 13px
        'md': '0.9357rem', //15px
        '14': '0.875rem',
        'base': '1.0rem', // 16px
      },
      fontFamily: {
        sans: [
          '"Inter var", sans-serif',
          {
            fontFeatureSettings:
                '"cv11"',
            // fontVariationSettings: '"opsz" 32',
          },
        ],
      },
    },
  },
  plugins: [],
}

