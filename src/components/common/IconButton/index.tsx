import { styled } from 'stitches.config';

export const IconButton = styled('button', {
  textDecoration: 'none',
  outline: 'none',
  userSelect: 'none',
  WebkitTapHighlightColor: 'transparent',
  borderWidth: 0,
  flexShrink: 0,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontFamily: 'inherit',
  cursor: 'pointer',

  // custom
  padding: 6,

  '&:disabled': {
    pointerEvents: 'none',
    color: '$slate6',
  },

  variants: {
    size: {
      '1': {
        borderRadius: 2,
        size: 32,
      },
      '2': {
        borderRadius: 4,
        size: 48,
      },
    },
    round: {
      true: {
        borderRadius: '9999 !important',
      },
    },
    float: {
      true: {},
    },
    variant: {
      contrast: {
        backgroundColor: 'transparent',
        color: '$slate12',
        '&:focus': {
          boxShadow: '0 0 0 2px $colors$slate12',
        },
      },
      primary: {
        backgroundColor: 'transparent',
        color: '$violet12',
        '&:focus': {
          boxShadow: '0 0 0 2px $colors$violet11',
        },
      },
    },
  },
  compoundVariants: [
    {
      variant: 'contrast',
      float: 'true',
      css: {
        boxShadow: '$colors$shadow1',
        '&:focus': {
          boxShadow: '$colors$shadow1, 0 0 0 2px $colors$slate7',
        },
      },
    },
    {
      variant: 'primary',
      float: 'true',
      css: {
        boxShadow: '$colors$shadow1',
        '&:focus': {
          boxShadow: '$colors$shadow1, 0 0 0 2px $colors$violet7',
        },
      },
    },
  ],
  defaultVariants: {
    size: '1',
    variant: 'contrast',
  },
});