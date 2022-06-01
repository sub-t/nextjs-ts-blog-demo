import { styled } from 'stitches.config';

export const Badge = styled('span', {
  userSelect: 'none',
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  fontFamily: 'inherit',
  flexShrink: 0,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  lineHeight: 1,
  WebkitTapHighlightColor: 'transparent',

  // custom
  padding: '4px 5.5px',
  gap: '$1',
  fontVariantNumeric: 'tabular-nums',
  fontWeight: 500,

  variants: {
    size: {
      '1': {
        fontSize: 11,
      },
      '2': {
        fontSize: 12,
      },
    },
    variant: {
      primary: {
        backgroundColor: '$violet11',
        color: '$violet1',
      },
      secondary: {
        backgroundColor: '$indigo11',
        color: '$indigo1',
      },
    },
    outlined: {
      true: {},
    },
  },
  compoundVariants: [
    {
      outlined: true,
      variant: 'primary',
      css: {
        border: '1px solid $colors$violet11',
        backgroundColor: '$violet1',
        color: '$violet11',
      },
    },
    {
      outlined: true,
      variant: 'secondary',
      css: {
        border: '1px solid $colors$indigo11',
        backgroundColor: '$indigo1',
        color: '$indigo11',
      },
    },
  ],
  defaultVariants: {
    size: '1',
    variant: 'violet',
  },
});
