import React from 'react';
import { styled, VariantProps } from 'stitches.config';

export const ListItem = styled('li', {
  all: 'unset',
  position: 'relative',
});

export const LinkTitle = styled('div', {
  fontWeight: 900,
  lineHeight: 1.2,
  color: '$hiContrast',
});

export const LinkText = styled('p', {
  all: 'unset',
  lineHeight: 1.4,
  fontWeight: 500,
  color: '$slate11',
});

export const StyledLinkIcon = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  // custom
  size: 40,

  variants: {
    hamburger: {
      true: {
        size: 28,
      },
    },
  },
});

type LinkIconProps = VariantProps<typeof StyledLinkIcon> & {
  children: React.ReactElement;
};

export const LinkIcon: React.VFC<LinkIconProps> = ({ children, ...props }) => {
  const StyledChildren = React.cloneElement(children, { size: 48 });
  return <StyledLinkIcon {...props}>{StyledChildren}</StyledLinkIcon>;
};
