import React from 'react';
import Link from 'next/link';
import { styled } from 'stitches.config';

const Anchor = styled('a', {
  textDecoration: 'none',
  color: 'inherit',
});

type Props = {
  href: string;
  children: React.ReactNode;
};

export const InnerLink: React.VFC<Props> = ({ href, children }) => (
  <Link href={href} passHref>
    <Anchor>{children}</Anchor>
  </Link>
);

export const OuterLink: React.VFC<Props> = ({ href, children }) => (
  <Anchor href={href} rel="noopener noreferrer" target="_blank">
    {children}
  </Anchor>
);
