import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/**/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/**/**/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      
    },
    screens: {
      'xl-max': { max: '1440px' },
      xl: '1440px',
  
      'lg-max': { max: '1239px' },
      lg: '1240px',
  
      'md-max': { max: '1023px' },
      md: '1023px',
  
      'sm-max': { max: '767px' },
      sm: '768px',
  
      'xs-max': { max: '519px' },
      xs: '520px',
    },
    borderRadius: {
      none: '0',
      max: '999px',
      DEFAULT: '1.6rem',
    },
    gridTemplateColumns: {
      'max-a': '1fr auto',
      1: '1fr',
      2: 'repeat(2, 1fr)',
      3: 'repeat(3, 1fr)',
      4: 'repeat(4, 1fr)',
      5: 'repeat(5, 1fr)',
      6: 'repeat(6, 1fr)',
      7: 'repeat(7, 1fr)',
      8: 'repeat(8, 1fr)',
    },
    columns: {
      1: '1',
      2: '2',
      3: '3',
      4: '4',
      5: '5',
      6: '6',
      7: '7',
      8: '8',
      9: '9',
      10: '10',
      11: '11',
      12: '12',
      auto: 'auto',
    },
  
    spacing: {
      '1/2': '5rem',
      0: '0',
      1: '0.1rem',
      2: '0.2rem',
      3: '0.3rem',
      4: '0.4rem',
      5: '0.5rem',
      6: '0.6rem',
      7: '0.7rem',
      8: '0.8rem',
      9: '0.9rem',
      10: '1rem',
      11: '1.1rem',
      12: '1.2rem',
      13: '1.3rem',
      14: '1.4rem',
      15: '1.5rem',
      16: '1.6rem',
      17: '1.7rem',
      18: '1.8rem',
      19: '1.9rem',
      20: '2rem',
      21: '2.1rem',
      22: '2.2rem',
      23: '2.3rem',
      24: '2.4rem',
      25: '2.5rem',
      26: '2.6rem',
      27: '2.7rem',
      28: '2.8rem',
      29: '2.9rem',
      30: '3rem',
      31: '3.1rem',
      32: '3.2rem',
      33: '3.3rem',
      34: '3.4rem',
      35: '3.5rem',
      36: '3.6rem',
      37: '3.7rem',
      38: '3.8rem',
      39: '3.9rem',
      40: '4rem',
      41: '4.1rem',
      42: '4.2rem',
      43: '4.3rem',
      44: '4.4rem',
      45: '4.5rem',
      46: '4.6rem',
      47: '4.7rem',
      48: '4.8rem',
      49: '4.9rem',
      50: '5rem',
      51: '5.1rem',
      52: '5.2rem',
      53: '5.3rem',
      54: '5.4rem',
      55: '5.5rem',
      56: '5.6rem',
      57: '5.7rem',
      58: '5.8rem',
      59: '5.9rem',
      60: '6rem',
      61: '6.1rem',
      62: '6.2rem',
      63: '6.3rem',
      64: '6.4rem',
      65: '6.5rem',
      66: '6.6rem',
      67: '6.7rem',
      68: '6.8rem',
      69: '6.9rem',
      70: '7rem',
      71: '7.1rem',
      72: '7.2rem',
      73: '7.3rem',
      74: '7.4rem',
      75: '7.5rem',
    },
    fontSize: {
      0: [
        '0',
        {
          lineHeight: '0',
          letterSpacing: '0',
        },
      ],
      xl: [
        '2rem',
        {
          'line-height': '120%',
        },
      ],
      '2xl': [
        '2.4rem',
        {
          lineHeight: '97%',
        },
      ],
      '3xl': [
        '3.2rem',
        {
          lineHeight: '100%',
        },
      ],
      '4xl': [
        '4.2rem',
        {
          lineHeight: '90%',
        },
      ],
      base: [
        '1.6rem',
        {
          lineHeight: '130%',
        },
      ],
      btn: [
        '1.6rem',
        {
          lineHeight: '97%',
        },
      ],
      s: [
        '1.4rem',
        {
          lineHeight: '120%',
        },
      ],
      14: [
        '1.4rem',
        {
          lineHeight: '97%',
        },
      ],
      13: [
        '1.3rem',
        {
          lineHeight: '97%',
        },
      ],
      11: [
        '1.1rem',
        {
          lineHeight: '130%',
        },
      ],
      10: [
        '1rem',
        {
          lineHeight: '97%',
        },
      ],
    },
  
    lineHeight: {
      none: '1',
      normal: '1.5',
    },
  },
  
  plugins: [],
}
export default config
