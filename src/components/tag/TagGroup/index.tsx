import React from 'react';
import { Wrap } from '@/components/common/Layout';

type TagGroupProps = {
  children: React.ReactNode;
};

export const TagGroup: React.VFC<TagGroupProps> = ({ children }) => {
  return (
    <Wrap gap="2" css={{ marginBottom: 24 }}>
      {children}
    </Wrap>
  );
};
