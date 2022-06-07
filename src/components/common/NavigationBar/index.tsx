import React from 'react';
import { styled, CSS } from 'stitches.config';
import { itemStyles } from './style';

export const NavigationBar = styled('nav', {
  overflow: 'hidden',
  width: '100%',
});

export const NavigationBarLabel = styled('li', itemStyles, {
  // custom
  color: '$mauve11',
  my: '$2',
});

const StyledNavigationBarLink = styled('a', itemStyles, {
  textDecoration: 'none',
  cursor: 'pointer',

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
