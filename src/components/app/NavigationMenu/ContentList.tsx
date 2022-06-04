import React from 'react';
import { slate, indigo } from '@radix-ui/colors';
import Link from 'next/link';
import { HighlightItem, HighlightList } from '@/components/animate/Highlight';
import { VStack } from '@/components/common/Layout';
import { NavigationMenuContentLink } from '@/components/common/NavigationMenu/NavigationMenuLink';
import { styled } from 'stitches.config';
import { ContentListItem } from './types';

const StyledContentList = styled('ul', {
  all: 'unset',
  listStyle: 'none',
  display: 'grid',
  padding: 22,
  columnGap: 10,

  '@md': {
    width: 600,
    gridTemplateColumns: 'repeat(2, 1fr)',
  },
});

const ListItem = styled('li', {
  all: 'unset',
  position: 'relative',
});

const StyledLinkIcon = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

type LinkIconProps = { children: React.ReactElement };

const LinkIcon: React.VFC<LinkIconProps> = ({ children }) => {
  const StyledChildren = React.cloneElement(children, { size: 48 });
  return <StyledLinkIcon>{StyledChildren}</StyledLinkIcon>;
};

const LinkTitle = styled('div', {
  fontWeight: 900,
  lineHeight: 1.2,
  color: indigo.indigo12,
});

const LinkText = styled('p', {
  all: 'unset',
  lineHeight: 1.4,
  fontWeight: 500,
  color: slate.slate11,
});

type ContentListProps = {
  contentList: ContentListItem[];
};

export const ContentList: React.VFC<ContentListProps> = ({ contentList }) => {
  return (
    <HighlightList>
      <StyledContentList>
        {contentList.map(({ href, icon, title, text }, idx) => (
          <HighlightItem key={idx} id={idx}>
            <ListItem>
              <Link href={href}>
                <NavigationMenuContentLink>
                  {icon && <LinkIcon>{icon}</LinkIcon>}
                  <VStack gap="1">
                    <LinkTitle>{title}</LinkTitle>
                    <LinkText>{text}</LinkText>
                  </VStack>
                </NavigationMenuContentLink>
              </Link>
            </ListItem>
          </HighlightItem>
        ))}
      </StyledContentList>
    </HighlightList>
  );
};
