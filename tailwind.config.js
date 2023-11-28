/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('/assets/hero.jpg')",
        'footer-texture': "url('/img/footer-texture.png')",
      },
      
    },
    colors: {
      'title': 'hsl(0, 0%, 20%)',
      'title-dark': 'hsl(0, 0%, 0%)',
      'text-color': 'hsl(0, 0%, 46%)',
      'body-color': 'hsl(0, 0%, 95%)',
      'container-color': '#fff',
    },
    screens: {
      'mob': {'max':'432px'},
      // => @media (min-width: 640px) { ... }

      'tab1': {'max':'769px'},
      // => @media (min-width: 768px) { ... }

      'tab2': {'max':'992px'},
      // => @media (min-width: 1024px) { ... }

      'web': {'max':'1200px'},
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    }
  },
  plugins: [],
}

