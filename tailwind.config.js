/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'mi-fondo': '#000000',     /* Negro puro */
        'mi-acento': '#ffffff',    /* Blanco puro para destacar */
        'mi-gris': '#a3a3a3',      /* Gris elegante para lectura */
        'mi-borde': '#262626',     /* Bordes súper sutiles */
      },
      fontFamily: {
        sans: ['Outfit', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}