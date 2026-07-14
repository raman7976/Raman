/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        night: '#0a0a0b',
        ink: '#0d0f12',
        panel: '#16181d',
        panel2: '#1c1f26',
        stone: '#2a2d34',
        // Minecraft-inspired accents (used sparingly on a matte-black canvas)
        grass: '#54cf4e',
        grassdark: '#3a8f36',
        diamond: '#4dd0e1',
        gold: '#ffb02e',
        redstone: '#ff5555',
        amethyst: '#b57edc',
      },
      fontFamily: {
        pixel: ['"Press Start 2P"', 'monospace'],
        mc: ['"Silkscreen"', 'monospace'],
        term: ['"VT323"', 'monospace'],
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      screens: {
        xs: '420px',
      },
    },
  },
  plugins: [],
}
