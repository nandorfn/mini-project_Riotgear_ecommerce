import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
        "primary": "#570df8",
        "secondary": "#f000b8",
        "accent": "#C2F377",
        "neutral": "#000000",
        "base-300": "#3E3E3E",
        "base-100": "#ffffff",
        "info": "#9FA0A2",
        "success": "#36d399",
        "warning": "#fbbd23",
        "error": "#FF3434",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
export default config
