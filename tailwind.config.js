/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class', 
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['"Bricolage Grotesque"', 'sans-serif'],
      },
      colors: {
        // Colores personalizados para modo claro y oscuro
        primary: {
          light: '#fafafa', // bg-neutral-50 
          dark: '#262626',  // bg-neutral-800 
        },
        secondary: {
          light: '#f5f5f5', // bg-neutral-100 
          dark: '#171717',  // bg-neutral-900 
        },
        accent: {
          light: '#0a0a0a', // bg-neutral-950 
          dark: '#3b82f6',  // mantenemos el azul para contraste en modo oscuro
        },
        text: {
          primary: {
            light: '#000000', // text-black
            dark: '#ffffff',  // text-white
          },
          secondary: {
            light: '#737373', // text-neutral-500 
            dark: '#d4d4d4',  // text-neutral-300 
          },
          muted: {
            light: '#a3a3a3', // text-neutral-400 
            dark: '#a3a3a3',  // mismo en oscuro
          },
          accent: {
            light: '#525252', // text-neutral-600 
            dark: '#e5e5e5',  // text-neutral-200 
          },
        },
        card: {
          light: '#f5f5f5', // bg-neutral-100
          dark: '#262626',  // bg-neutral-800 
        },
        border: {
          light: '#e5e5e5', // border-neutral-200 
          dark: '#404040',  // border-neutral-700 
        },
        hover: {
          light: '#e5e5e5', // hover:bg-neutral-200 
          dark: '#404040',  // hover:bg-neutral-700 
        }
      }
    },
  },
  plugins: [require('@tailwindcss/forms')],
}

