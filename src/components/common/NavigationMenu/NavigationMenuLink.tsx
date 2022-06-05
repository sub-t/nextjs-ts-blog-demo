import React from 'react';
import * as NavigationMenuPrimitive from '@radix-ui/react-navigation-menu';
import Link from 'next/link';
import { styled } from 'stitches.config';
import { itemStyles } from './baseStyles';

export const NavigationMenuContentLink = styled(
  NavigationMenuPrimitive.Link,
  itemStyles,
  {
    textDecoration: 'none',

    // custom
    gap: 24,
    padding: 12,
    borderRadius: 6,
  },
);

const NavigationMenuLink = styled(NavigationMenuPrimitive.Link, itemStyles, {
  textDecoration: 'none',
});

const StyledNavigationMenuItem = styled(NavigationMenuPrimitive.Item, {});

type NavigationMenuLinkItemProps = {
  children: React.ReactNode;
  href: string;
  inner: boolean;
};

export const NavigationMenuLinkItem = React.forwardRef<
  React.ElementRef<typeof StyledNavigationMenuItem>,
  NavigationMenuLinkItemProps
>(({ children, href, inner }, forwardedRef) => (
  <StyledNavigationMenuItem ref={forwardedRef}>
    {inner ? (
      <Link href={href} passHref>
        <NavigationMenuLink>{children}</NavigationMenuLink>
      </Link>
    ) : (
      <NavigationMenuLink href={href}>{children}</NavigationMenuLink>
    )}
  </StyledNavigationMenuItem>
));

NavigationMenuLinkItem.displayName = 'NavigationMenuLinkItem';
