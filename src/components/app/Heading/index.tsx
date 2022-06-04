import React from 'react';
import { Box } from '@/components/common/Layout';
import { styled } from 'stitches.config';

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
  color: '$hiContrast',
});

const StyledIcon = styled('span', {
  display: 'flex',
  alignItems: 'center',
  width: 48,
});

type Props = {
  children: React.ReactNode;
  text: string;
  icon: React.ReactElement;
};

export const Heading = React.forwardRef<
  React.ElementRef<typeof StyledHeading>,
  Props
>(({ children, text, icon }, forwardedRef) => {
  const newIcon = React.cloneElement(icon, { size: 48 });
  return (
    <Box>
      <StyledSubHeading>---- {text} ----</StyledSubHeading>
      <StyledHeading ref={forwardedRef}>
        <StyledIcon>{newIcon}</StyledIcon>
        {children}
      </StyledHeading>
    </Box>
  );
});

Heading.displayName = 'Heading';
