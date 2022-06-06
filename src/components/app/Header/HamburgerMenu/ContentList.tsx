import React from 'react';
import Link from 'next/link';
import { AiTwotoneTag } from 'react-icons/ai';
import { NavigationBarLink } from '@/components/common/NavigationBar';
import { LinkIcon, ListItem } from '../ListLink';
import { ContentListItem } from '../types';

type ContentListProps = {
  contentList: ContentListItem[];
};

export const ContentList: React.VFC<ContentListProps> = ({ contentList }) => {
  return (
    <>
      {contentList.map(({ href, icon, title }) => (
        <ListItem key={title}>
          <Link href={href} passHref>
            <NavigationBarLink>
              <LinkIcon hamburger>{icon ?? <AiTwotoneTag />}</LinkIcon>
              {title}
            </NavigationBarLink>
          </Link>
        </ListItem>
      ))}
    </>
  );
};
