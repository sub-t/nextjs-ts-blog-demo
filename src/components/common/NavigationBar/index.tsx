import React from 'react';
import { styled, css, CSS } from 'stitches.config';

export const NavigationBar = styled('nav', {
  overflow: 'hidden',
  width: '100%',
});

export const NavigationBarList = styled('li', {
  all: 'unset',
});

export const NavigationBarSeparator = styled('div', {
  // custom
  height: 1,
  margin: 4,
  backgroundColor: '$violet6',
});

const StyledNavigationBarIcon = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  // custom
  width: 28,
  height: 28,
});

type Props = React.ComponentPropsWithoutRef<typeof StyledNavigationBarIcon> & {
  icon: React.ReactElement;
};

export const NavigationBarIcon = React.forwardRef<
  React.ElementRef<typeof StyledNavigationBarIcon>,
  Props
>(({ icon, ...props }, forwardedRef) => {
  const newIcon = React.cloneElement(icon, { size: 99 });
  return (
    <StyledNavigationBarIcon {...props} ref={forwardedRef}>
      {newIcon}
    </StyledNavigationBarIcon>
  );
});

NavigationBarIcon.displayName = 'NavigationBarIcon';

const baseItemCss = css({
  boxSizing: 'border-box',
  userSelect: 'none',
  overflow: 'hidden',
  display: 'flex',
  alignItems: 'center',
  fontFamily: '$untitled',
  lineHeight: 1,
  cursor: 'pointer',
  width: '100%',

  // custom
  gap: '$4',
  padding: '12px 24px',
  fontSize: 16,
  fontWeight: 500,
  fontVariantNumeric: 'tabular-nums',
});

export const NavigationBarLabel = styled('div', baseItemCss, {
  // custom
  color: '$mauve11',
  my: '$2',
});

const StyledNavigationBarItem = styled('div', baseItemCss, {
  textDecoration: 'none',

  // custom
  color: '$violet11',

  '&:hover': {
    backgroundColor: '$violet3',
  },
  '&:focus': {
    outline: 'none',
    backgroundColor: '$violet9',
    color: '$violet1',
  },
  '&[data-disabled]': {
    color: '$mauve8',
  },
});

type NavigationBarItemProps = React.ComponentPropsWithoutRef<
  typeof StyledNavigationBarItem
> & {
  css?: CSS;
};

export const NavigationBarItem = React.forwardRef<
  React.ElementRef<typeof StyledNavigationBarItem>,
  NavigationBarItemProps
>(({ children, ...props }, forwardedRef) => (
  <StyledNavigationBarItem {...props} ref={forwardedRef}>
    {children}
  </StyledNavigationBarItem>
));

NavigationBarItem.displayName = 'NavigationBarItem';
