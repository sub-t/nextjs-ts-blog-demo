import React from 'react';
import Link from 'next/link';
import { styled } from 'stitches.config';

const Anchor = styled('a', {
  textDecoration: 'none',
});

type InnerLinkProps = {
  href: string;
  as?: string;
  children: React.ReactNode;
};

export const InnerLink: React.VFC<InnerLinkProps> = ({
  href,
  as,
  children,
}) => (
  <Link href={href} as={as ?? href} passHref>
    <Anchor>{children}</Anchor>
  </Link>
);
