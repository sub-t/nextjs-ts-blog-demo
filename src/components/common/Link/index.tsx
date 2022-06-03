import React from 'react';
import Link from 'next/link';
import { styled } from 'stitches.config';

const Anchor = styled('a', {
  textDecoration: 'none',
});

type Props = {
  href: string;
  as?: string;
  children: React.ReactNode;
};

export const InnerLink: React.VFC<Props> = ({
  href,
  as,
  children,
}) => (
  <Link href={href} as={as ?? href} passHref>
    <Anchor>{children}</Anchor>
  </Link>
);
