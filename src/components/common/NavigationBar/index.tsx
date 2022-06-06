import React from 'react';
import { styled, css, CSS } from 'stitches.config';

export const NavigationBar = styled('nav', {
  overflow: 'hidden',
  width: '100%',
});

export const NavigationBarList = styled('ul', {
  all: 'unset',
});

const baseLinkCss = css({
  boxSizing: 'border-box',
  userSelect: 'none',
  overflow: 'hidden',
  display: 'flex',
  alignItems: 'center',
  alignLinks: 'center',
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

export const NavigationBarLabel = styled('div', baseLinkCss, {
  // custom
  color: '$mauve11',
  my: '$2',
});

const StyledNavigationBarLink = styled('a', baseLinkCss, {
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

type NavigationBarLinkProps = React.ComponentPropsWithoutRef<
  typeof StyledNavigationBarLink
> & {
  css?: CSS;
};

export const NavigationBarLink = React.forwardRef<
  React.ElementRef<typeof StyledNavigationBarLink>,
  NavigationBarLinkProps
>(({ children, ...props }, forwardedRef) => (
  <StyledNavigationBarLink {...props} ref={forwardedRef}>
    {children}
  </StyledNavigationBarLink>
));

NavigationBarLink.displayName = 'NavigationBarLink';
