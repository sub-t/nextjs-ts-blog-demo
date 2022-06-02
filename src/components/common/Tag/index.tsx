import React from 'react';
import { AiTwotoneTag } from 'react-icons/ai';
import { styled } from 'stitches.config';
import { InnerLink } from '../Link';

const StyledTag = styled('span', {
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
  borderRadius: 9999,
  fontVariantNumeric: 'tabular-nums',
  fontWeight: 500,
  fontSize: 12,
  color: '$violet11',
});

type TagProps = { text: string; href: string };

export const Tag: React.VFC<TagProps> = ({ text, href }) => (
  <InnerLink href={href}>
    <StyledTag>
      <AiTwotoneTag />
      {text}
    </StyledTag>
  </InnerLink>
);
