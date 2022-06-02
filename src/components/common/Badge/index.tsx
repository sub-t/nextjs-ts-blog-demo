import React from 'react';
import { styled } from 'stitches.config';
import { InnerLink } from '../Link';

const StyledBadge = styled('span', {
  userSelect: 'none',
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  fontFamily: 'inherit',
  flexShrink: 0,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  lineHeight: 1,
  WebkitTapHighlightColor: 'transparent',

  // custom
  padding: '4px 8px',
  gap: '$1',
  border: 'solid 1px currentColor',
  borderRadius: 4,
  fontVariantNumeric: 'tabular-nums',
  fontWeight: 500,
  fontSize: 12,
  color: '$slate1',
  bgColor: '$slate12',
});

type BadgeProps = {
  text: string;
  href: string;
};

export const Badge: React.VFC<BadgeProps> = ({ text, href }) => (
  <InnerLink href={href}>
    <StyledBadge>{text}</StyledBadge>
  </InnerLink>
);
