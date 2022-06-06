import React from 'react';
import Link from 'next/link';
import { HighlightItem, HighlightList } from '@/components/animate/Highlight';
import { VStack } from '@/components/common/Layout';
import { NavigationMenuContentLink } from '@/components/common/NavigationMenu/NavigationMenuLink';
import { styled } from 'stitches.config';
import { LinkIcon, LinkText, LinkTitle, ListItem } from '../ListLink';
import { ContentListItem } from '../types';

const StyledContentList = styled('ul', {
  all: 'unset',
  listStyle: 'none',
  display: 'grid',
  padding: 22,
  columnGap: 10,

  '@md': {
    gridTemplateColumns: 'repeat(2, 1fr)',
  },
  '@lg': {
    gridTemplateColumns: 'repeat(3, 1fr)',
  },
});

type ContentListProps = {
  contentList: ContentListItem[];
};

export const ContentList: React.VFC<ContentListProps> = ({ contentList }) => {
  return (
    <HighlightList id="ContentList">
      <StyledContentList>
        {contentList.map(({ href, icon, title, text }, idx) => (
          <ListItem key={idx}>
            <HighlightItem id={idx}>
              <Link href={href} passHref>
                <NavigationMenuContentLink>
                  {icon && <LinkIcon>{icon}</LinkIcon>}
                  <VStack gap="1">
                    <LinkTitle>{title}</LinkTitle>
                    <LinkText>{text}</LinkText>
                  </VStack>
                </NavigationMenuContentLink>
              </Link>
            </HighlightItem>
          </ListItem>
        ))}
      </StyledContentList>
    </HighlightList>
  );
};
