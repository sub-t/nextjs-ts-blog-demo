import { css } from 'stitches.config';

export const textStyles = css({
  m: 0,
  p: 0,
  fontWeight: 500,

  variants: {
    color: {
      contrast: {
        color: '$hiContrast',
      },
      violet: {
        color: '$violet12',
      },
    },
    size: {
      1: {
        fontSize: '$1',
      },
      2: {
        fontSize: '$2',
      },
      3: {
        fontSize: '$3',
      },
      4: {
        fontSize: '$4',
      },
      5: {
        fontSize: '$5',
      },
      6: {
        fontSize: '$6',
      },
      7: {
        fontSize: '$7',
      },
      8: {
        fontSize: '$8',
      },
      9: {
        fontSize: '$9',
      },
    },
  },
});
