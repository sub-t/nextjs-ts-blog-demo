import { styled } from 'stitches.config';

export const Code = styled('code', {
  whiteSpace: 'nowrap',

  // custom
  fontFamily: '$mono',
  fontSize: 'max(12px, 85%)',
  padding: '0 3px 2px 3px',

  variants: {
    variant: {
      primary: {
        backgroundColor: '$violet3',
        color: '$violet11',
      },
      secondary: {
        backgroundColor: '$mauve3',
        color: '$mauve11',
      },
    },
  },
  defaultVariants: {
    variant: 'primary',
  },
});