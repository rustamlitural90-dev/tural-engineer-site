/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        ink: '#07111f',
        slate: '#111827',
        mist: '#f5f8fb',
        line: '#d9e2ee',
        accent: '#0757c8',
        cyan: '#2dd4bf'
      },
      fontFamily: {
        sans: [
          'Inter',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'sans-serif'
        ]
      },
      boxShadow: {
        soft: '0 24px 70px rgba(7, 17, 31, 0.10)'
      }
    }
  },
  plugins: []
};
