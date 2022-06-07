import React from 'react';
import Link from 'next/link';
import { AiTwotoneTag } from 'react-icons/ai';
import { Icon } from '@/components/common/Icon';
import { Box } from '@/components/common/Layout';
import { NavigationBarLink } from '@/components/common/NavigationBar';
import { ContentListItemType } from '../types';

type ContentListProps = {
  contentList: ContentListItemType[];
};

export const ContentList: React.VFC<ContentListProps> = ({ contentList }) => {
  return (
    <>
      {contentList.map(({ href, icon, title }) => (
        <Box as="li" key={title}>
          <Link href={href} passHref>
            <NavigationBarLink>
              <Icon size="3">{icon ?? <AiTwotoneTag />}</Icon>
              {title}
            </NavigationBarLink>
          </Link>
        </Box>
      ))}
    </>
  );
};
