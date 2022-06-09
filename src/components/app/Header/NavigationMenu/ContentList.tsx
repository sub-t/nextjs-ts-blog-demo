import React from 'react';
import Link from 'next/link';
import { HighlightItem, HighlightList } from '@/components/animate/Highlight';
import { Icon } from '@/components/common/Icon';
import { Grid, VStack } from '@/components/common/Layout';
import { NavigationMenuLink } from '@/components/common/NavigationMenu';
import { Heading, Text } from '@/components/common/Text';
import type { ContentListItemType } from '../types';

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
      <NavigationMenuLink>
        {icon && <Icon size="4">{icon}</Icon>}
        <VStack gap="1">
          <Heading as="div" size="2" css={{ lineHeight: 1.4 }}>
            {title}
          </Heading>
          <Text size="1" css={{ lineHeight: 1.2, color: '$slate11' }}>
            {text}
          </Text>
        </VStack>
      </NavigationMenuLink>
    </Link>
  </HighlightItem>
);

type ContentListProps = {
  contentList: ContentListItemType[];
};

export const ContentList: React.VFC<ContentListProps> = ({ contentList }) => {
  return (
    <HighlightList id="ContentList">
      <Grid
        as="ul"
        columns={{ '@initial': '1', '@md': '2', '@lg': '3' }}
        gap="2"
        css={{ p: 22 }}
      >
        {contentList.map((content, idx) => (
          <ContentListItem key={idx} {...content} idx={idx} />
        ))}
      </Grid>
    </HighlightList>
  );
};
