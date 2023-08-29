import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        f1: ['var(--font-f1)'],
      },
      // backgroundImage: {
      //   'bgLanding' : "url('../public/images/Logo.png')",
      // }
    },
  },
  plugins: [require("daisyui")],
}
export default config
