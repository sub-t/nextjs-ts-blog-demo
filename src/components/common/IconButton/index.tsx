import React from 'react';
import { css, styled, VariantProps } from 'stitches.config';

export const iconButtonStyle = css({
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
  backgroundColor: 'transparent',

  '&:disabled': {
    pointerEvents: 'none',
    color: '$slate6',
  },

  variants: {
    size: {
      '1': {
        size: 32,
        padding: 6,
        borderRadius: 2,
      },
      '2': {
        size: 48,
        padding: 10,
        borderRadius: 4,
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
        color: '$slate12',
        '&:focus': {
          boxShadow: '0 0 0 2px $colors$slate12',
        },
      },
      primary: {
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
        bgColor: '$loContrast',
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
        bgColor: '$mauve1',
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

const StyledIconButton = styled('button', iconButtonStyle);

type Props = VariantProps<typeof StyledIconButton> &
  React.ComponentPropsWithoutRef<typeof StyledIconButton> & {
    icon: React.ReactElement;
  };

export const IconButton = React.forwardRef<
  React.ElementRef<typeof StyledIconButton>,
  Props
>(({ icon, ...props }, forwardedRef) => {
  const newIcon = React.cloneElement(icon, { size: 99 });
  return (
    <StyledIconButton type="button" {...props} ref={forwardedRef}>
      {newIcon}
    </StyledIconButton>
  );
});

IconButton.displayName = 'IconButton';
