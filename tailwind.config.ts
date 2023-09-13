import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      animation: {
        cursor: 'cursor .6s linear infinite alternate',
        type: 'type 2.5s ease-out .8s 1 normal both',
      },
      keyframes: {
        type: {
          '0%' : { width: '1ch' },
          '2%' : { width: '2ch' },
          '4%' : { width: '3ch' },
          '6%' : { width: '4ch' },
          '8%' : { width: '5ch' },
          '10%' : { width: '6ch' },
          '12%' : { width: '7ch' },
          '14%' : { width: '8ch' },
          '16%' : { width: '9ch' },
          '18%' : { width: '10ch' },
          '20%' : { width: '11ch' },
          '22%' : { width: '12ch' },
          '24%' : { width: '13ch' },
          '26%' : { width: '14ch' },
          '28%' : { width: '15ch' },
          '30%' : { width: '16ch' },
          '32%' : { width: '17ch' },
          '34%' : { width: '18ch' },
          '36%' : { width: '19ch' },
          '38%' : { width: '20ch' },
          '40%' : { width: '21ch' },
          '42%' : { width: '22ch' },
          '44%' : { width: '23ch' },
          '46%' : { width: '24ch' },
          '48%' : { width: '25ch' },
          '50%' : { width: '26ch' },
          '52%' : { width: '27ch' },
          '54%' : { width: '28ch' },
          '56%' : { width: '29ch' },
          '58%' : { width: '30ch' },
          '60%' : { width: '31ch' },
          '62%' : { width: '32ch' },
          '64%' : { width: '33ch' },
          '66%' : { width: '34ch' },
          '68%' : { width: '35ch' },
          '70%' : { width: '36ch' },
          '73%' : { width: '37ch' },
          '75%' : { width: '38ch' },
          '77%' : { width: '39ch' },
          '79%' : { width: '40ch' },
          '82%' : { width: '41ch' },
          '85%' : { width: '42ch' },
          '88%' : { width: '43ch' },

          // '90%' : { width: '46ch' },
          // '92% 95%' : { width: '47ch' },
          
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config
