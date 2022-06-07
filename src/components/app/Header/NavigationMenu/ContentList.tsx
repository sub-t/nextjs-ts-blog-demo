import React from 'react';
import Link from 'next/link';
import { HighlightItem, HighlightList } from '@/components/animate/Highlight';
import { Icon } from '@/components/common/Icon';
import { VStack } from '@/components/common/Layout';
import { NavigationMenuContentLink } from '@/components/common/NavigationMenu/NavigationMenuLink';
import { Heading } from '@/components/common/Text';
import { styled } from 'stitches.config';
import type { ContentListItemType } from '../types';

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

type ContentListItemTypeProps = ContentListItemType & {
  idx: number;
};

export const ContentListItem: React.VFC<ContentListItemTypeProps> = ({
  href,
  icon,
  title,
  text,
  idx,
}) => (
  <HighlightItem as="li" id={idx}>
    <Link href={href} passHref>
      <NavigationMenuContentLink>
        {icon && <Icon size="4">{icon}</Icon>}
        <VStack gap="1">
          <Heading as="div" css={{ lineHeight: 1.4 }}>
            {title}
          </Heading>
          <Heading as="p" size="2" css={{ lineHeight: 1.2, color: '$slate11' }}>
            {text}
          </Heading>
        </VStack>
      </NavigationMenuContentLink>
    </Link>
  </HighlightItem>
);

type ContentListProps = {
  contentList: ContentListItemType[];
};

export const ContentList: React.VFC<ContentListProps> = ({ contentList }) => {
  return (
    <HighlightList id="ContentList">
      <StyledContentList>
        {contentList.map((content, idx) => (
          <ContentListItem key={idx} {...content} idx={idx} />
        ))}
      </StyledContentList>
    </HighlightList>
  );
};
