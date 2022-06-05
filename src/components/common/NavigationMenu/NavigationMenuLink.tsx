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

export const NavigationMenuLink = styled(
  NavigationMenuPrimitive.Link,
  itemStyles,
  {
    textDecoration: 'none',
  },
);

const StyledNavigationMenuItem = styled(NavigationMenuPrimitive.Item, {});

type NavigationMenuLinkItemProps = {
  children: React.ReactNode;
  href: string;
};

export const NavigationMenuLinkItem = React.forwardRef<
  React.ElementRef<typeof StyledNavigationMenuItem>,
  NavigationMenuLinkItemProps
>(({ children, href }, forwardedRef) => (
  <StyledNavigationMenuItem ref={forwardedRef}>
    <Link href={href}>
      <NavigationMenuLink asChild>{children}</NavigationMenuLink>
    </Link>
  </StyledNavigationMenuItem>
));

NavigationMenuLinkItem.displayName = 'NavigationMenuLinkItem';
