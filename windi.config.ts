import { defineConfig } from 'windicss/helpers';

export default defineConfig({
  attributify: true, // Enable Attributify Mode
  darkMode: 'class', // Enable dark mode (optional)
  extract: {
    include: ['src/**/*.{tsx,ts}'],
    exclude: ['node_modules', '.git'],
  },
  theme: {
    extend: {
      colors: {
        primary: '#3B82F6', // Custom color example
        secondary: '#9333EA',
      },
    },
  },
  shortcuts: {
    btn: 'px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600',
  },
});