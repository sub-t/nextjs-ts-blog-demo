import React from 'react';
import Link from 'next/link';

type CustomLinkProps = {
  href: string;
  as?: string;
  children: React.ReactNode;
};

export const CustomLink: React.VFC<CustomLinkProps> = ({
  href,
  as,
  children,
}) => (
  <Link href={href} as={as ?? href} passHref>
    <a>{children}</a>
  </Link>
);
