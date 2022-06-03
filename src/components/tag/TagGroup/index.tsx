import React from 'react';
import { Wrap } from '@/components/common/Layout';

type Props = {
  children: React.ReactNode;
};

export const TagGroup: React.VFC<Props> = ({ children }) => {
  return (
    <Wrap gap="2" css={{ marginBottom: 24 }}>
      {children}
    </Wrap>
  );
};
