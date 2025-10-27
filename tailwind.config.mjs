/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        background: '#1a1a1a',
        surface: '#242424',
        text: '#f5f5f0',
        'text-muted': '#a8a8a0',
        'text-subtle': '#6b6b65',
        accent: '#d97706',
        'accent-hover': '#ea580c',
        green: '#059669',
        'green-muted': '#047857',
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        display: ['Georgia', 'Cambria', 'Times New Roman', 'serif'],
      },
    },
  },
  plugins: [],
};