import React from 'react';
import { styled } from 'stitches.config';

const StyledHeading = styled('h2', {
  all: 'unset',
  display: 'flex',
  gap: '$2',
  fontSize: 40,
  fontWeight: 900,
  color: '$indigo12',
});

const StyledIcon = styled('span', {
  display: 'flex',
  alignItems: 'center',
  width: 48,
});

type HeadingProps = { children: React.ReactNode; icon: React.ReactElement };

export const Heading = React.forwardRef<
  React.ElementRef<typeof StyledHeading>,
  HeadingProps
>(({ children, icon }, forwardedRef) => {
  const newIcon = React.cloneElement(icon, { size: 48 });
  return (
    <StyledHeading ref={forwardedRef}>
      <StyledIcon>{newIcon}</StyledIcon>
      {children}
    </StyledHeading>
  );
});

Heading.displayName = 'Heading';
