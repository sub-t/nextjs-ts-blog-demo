import React from 'react';
import { styled } from 'stitches.config';
import { Box } from '../../common/Layout';

const StyledSubHeading = styled('h3', {
  all: 'unset',
  marginBottom: 8,
  fontSize: 18,
  fontWeight: 900,
  textTransform: 'uppercase',
  color: '$violet11',
});

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

type HeadingProps = {
  children: React.ReactNode;
  text: string;
  icon: React.ReactElement;
};

export const Heading = React.forwardRef<
  React.ElementRef<typeof StyledHeading>,
  HeadingProps
>(({ children, text, icon }, forwardedRef) => {
  const newIcon = React.cloneElement(icon, { size: 48 });
  return (
    <Box css={{ my: 40 }}>
      <StyledSubHeading>---- {text} ----</StyledSubHeading>
      <StyledHeading ref={forwardedRef}>
        <StyledIcon>{newIcon}</StyledIcon>
        {children}
      </StyledHeading>
    </Box>
  );
});

Heading.displayName = 'Heading';
