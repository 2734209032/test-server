/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        custom: '4px 6px 10px rgba(174, 174, 174, 0.29)'
      },
      fontSize: {
        12: '0.75rem', // 12px
        14: '0.875rem', // 14px
        16: '1rem', // 16px
        20: '1.25rem', // 20px
        32: '2rem' // 32px
      },
      borderRadius: {
        12: '0.75rem', // 12px
        14: '0.875rem', // 14px
        16: '1rem', // 16px
        20: '1.25rem', // 20px
        32: '2rem', // 32px
        40: '2.5rem' // 40px
      },
      backgroundImage: {
        'custom-image': "url('')"
      }
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
      '3xl': '1920px'
    },
    spacing: {
      1: '0.0625rem', // 1px
      2: '0.125rem', // 2px
      3: '0.1875rem', // 3px
      4: '0.25rem', // 4px
      5: '0.3125rem', // 5px
      6: '0.375rem', // 6px
      7: '0.4375rem', // 7px
      8: '0.5rem', // 8px
      9: '0.5625rem', // 9px
      10: '0.625rem', // 10px
      11: '0.6875rem', // 11px
      12: '0.75rem', // 12px
      13: '0.8125rem', // 13px
      14: '0.875rem', // 14px
      15: '0.9375rem', // 15px
      16: '1rem', // 16px
      17: '1.0625rem', // 17px
      18: '1.125rem', // 18px
      19: '1.1875rem', // 19px
      20: '1.25rem', // 20px
      21: '1.3125rem', // 21px
      22: '1.375rem', // 22px
      23: '1.4375rem', // 23px
      24: '1.5rem', // 24px
      25: '1.5625rem', // 25px
      26: '1.625rem', // 26px
      27: '1.6875rem', // 27px
      28: '1.75rem', // 28px
      29: '1.8125rem', // 29px
      30: '1.875rem', // 30px
      31: '1.9375rem', // 31px
      32: '2rem', // 32px
      33: '2.0625rem', // 33px
      34: '2.125rem', // 34px
      35: '2.1875rem', // 35px
      36: '2.25rem', // 36px
      37: '2.3125rem', // 37px
      38: '2.375rem', // 38px
      39: '2.4375rem', // 39px
      40: '2.5rem', // 40px
      41: '2.5625rem', // 41px
      42: '2.625rem', // 42px
      43: '2.6875rem', // 43px
      44: '2.75rem', // 44px
      45: '2.8125rem', // 45px
      46: '2.875rem', // 46px
      47: '2.9375rem', // 47px
      48: '3rem', // 48px
      49: '3.0625rem', // 49px
      50: '3.125rem', // 50px
      51: '3.1875rem', // 51px
      52: '3.25rem', // 52px
      53: '3.3125rem', // 53px
      54: '3.375rem', // 54px
      55: '3.4375rem', // 55px
      56: '3.5rem', // 56px
      57: '3.5625rem', // 57px
      58: '3.625rem', // 58px
      59: '3.6875rem', // 59px
      60: '3.75rem', // 60px
      61: '3.8125rem', // 61px
      62: '3.875rem', // 62px
      63: '3.9375rem', // 63px
      64: '4rem', // 64px
      65: '4.0625rem', // 65px
      66: '4.125rem', // 66px
      67: '4.1875rem', // 67px
      68: '4.25rem', // 68px
      69: '4.3125rem', // 69px
      70: '4.375rem', // 70px
      71: '4.4375rem', // 71px
      72: '4.5rem', // 72px
      73: '4.5625rem', // 73px
      74: '4.625rem', // 74px
      75: '4.6875rem', // 75px
      76: '4.75rem', // 76px
      77: '4.8125rem', // 77px
      78: '4.875rem', // 78px
      79: '4.9375rem', // 79px
      80: '5rem', // 80px
      81: '5.0625rem', // 81px
      82: '5.125rem', // 82px
      83: '5.1875rem', // 83px
      84: '5.25rem', // 84px
      85: '5.3125rem', // 85px
      86: '5.375rem', // 86px
      87: '5.4375rem', // 87px
      88: '5.5rem', // 88px
      89: '5.5625rem', // 89px
      90: '5.625rem', // 90px
      91: '5.6875rem', // 91px
      92: '5.75rem', // 92px
      93: '5.8125rem', // 93px
      94: '5.875rem', // 94px
      95: '5.9375rem', // 95px
      96: '6rem', // 96px
      97: '6.0625rem', // 97px
      98: '6.125rem', // 98px
      99: '6.1875rem', // 99px
      100: '6.25rem' // 100px
    },
    colors: {
      blue: '#E4F0FF',
      pink: '#ff49db',
      orange: '#ff7849',
      green: '#13ce66',
      'gray-dark': '#273444',
      gray: '#8492a6',
      'gray-light': '#d3dce6'
    },
    variants: {
      extend: {
        padding: ['responsive'],
        margin: ['responsive'],
        text: ['responsive']
      }
    }
  },
  plugins: []
}
