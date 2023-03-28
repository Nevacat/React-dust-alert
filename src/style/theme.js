import { css } from 'styled-components';

export const theme = {
  mainBlack: '#000000',
  mainWhite: '#FFFFFF',
  mainPink: '#FF385C',
  mainGrey: '#F7F7F7',
  darkGrey: '#797979',
  
  fontLarge: '4.8rem',
  fontMedium: '2.6rem',
  fontSemiMedium: '2rem',
  fontRegular: '1.8rem',
  fontSmall: '1.6rem',
  fontMicro: '1.4rem',

  weightBold: 700,
  weightSemiBold: 600,
  weightRegular: 400,

  absoluteCenter: css`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  `,
};

export const mixins = {
  // flex
  flexBox: (direction = 'row', align = 'center', justify = 'center') => `
    display: flex;
    flex-direction: ${direction};
    align-items: ${align};
    justify-content: ${justify};
  `,
};