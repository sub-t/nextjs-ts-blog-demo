import React from 'react';
import { blackA } from '@radix-ui/colors';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { Cross1Icon } from '@radix-ui/react-icons';
import { IconButton } from '@/components/common/IconButton';
import { styled, keyframes, VariantProps, CSS } from 'stitches.config';

// custom
const animationDuration = '600ms';
const animationTimingFunction = 'cubic-bezier(.7 , 0, .3, 1)';
const animationFillMode = 'forwards';
const SheetWidth = 300;

const fadeIn = keyframes({
  from: { opacity: '0' },
  to: { opacity: '1' },
});

const fadeOut = keyframes({
  from: { opacity: '1' },
  to: { opacity: '0' },
});

const StyledOverlay = styled(DialogPrimitive.Overlay, {
  position: 'fixed',
  inset: 0,
  bgColor: blackA.blackA9,

  '@media (prefers-reduced-motion: no-preference)': {
    animationDuration,
    animationTimingFunction,
    animationFillMode,
    willChange: 'opacity',
    '&[data-state="open"]': {
      animationName: fadeIn,
    },
    '&[data-state="closed"]': {
      animationName: fadeOut,
    },
  },
});

type SheetProps = React.ComponentPropsWithoutRef<typeof DialogPrimitive.Root>;

export const Sheet: React.VFC<SheetProps> = ({ children, ...props }) => {
  return (
    <DialogPrimitive.Root {...props}>
      <StyledOverlay />
      {children}
    </DialogPrimitive.Root>
  );
};

const slideIn = keyframes({
  from: { transform: '$$transformValue' },
  to: { transform: 'translate3d(0,0,0)' },
});

const slideOut = keyframes({
  from: { transform: 'translate3d(0,0,0)' },
  to: { transform: '$$transformValue' },
});

const StyledContent = styled(DialogPrimitive.Content, {
  position: 'fixed',
  top: 0,
  bottom: 0,
  zIndex: '$dialog',

  // custom
  width: SheetWidth,
  bgColor: '$loContrast',

  '@media (prefers-reduced-motion: no-preference)': {
    animationDuration,
    animationTimingFunction,
    animationFillMode,
    willChange: 'transform',
    '&[data-state="open"]': {
      animationName: slideIn,
    },
    '&[data-state="closed"]': {
      animationName: slideOut,
    },
  },

  variants: {
    side: {
      top: {
        $$transformValue: 'translate3d(0,-100%,0)',
        width: '100%',
        height: SheetWidth,
        bottom: 'auto',
      },
      right: {
        $$transformValue: 'translate3d(100%,0,0)',
        right: 0,
      },
      bottom: {
        $$transformValue: 'translate3d(0,100%,0)',
        width: '100%',
        height: SheetWidth,
        bottom: 0,
        top: 'auto',
      },
      left: {
        $$transformValue: 'translate3d(-100%,0,0)',
        left: 0,
      },
    },
  },

  defaultVariants: {
    side: 'right',
  },
});

const StyledCloseButton = styled(DialogPrimitive.Close, {
  position: 'absolute',

  // custom
  top: 8,
  right: 8,
});

type SheetContentVariants = VariantProps<typeof StyledContent>;
type DialogContentPrimitiveProps = React.ComponentPropsWithoutRef<
  typeof StyledContent
>;
type SheetContentProps = DialogContentPrimitiveProps &
  SheetContentVariants & { css?: CSS };

export const SheetContent = React.forwardRef<
  React.ElementRef<typeof StyledContent>,
  SheetContentProps
>(({ children, ...props }, forwardedRef) => (
  <StyledContent {...props} ref={forwardedRef}>
    {children}
    <StyledCloseButton asChild>
      <IconButton type="button" aria-label="close" icon={<Cross1Icon />} />
    </StyledCloseButton>
  </StyledContent>
));

SheetContent.displayName = 'SheetContent';

export const SheetTrigger = DialogPrimitive.Trigger;
export const SheetTitle = DialogPrimitive.Title;
export const SheetDescription = DialogPrimitive.Description;
