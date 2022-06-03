import React from 'react';
import { slate, indigo } from '@radix-ui/colors';
import { motion } from 'framer-motion';
import Link from 'next/link';
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

  variants: {
    layout: {
      one: {
        '@md': {
          width: 500,
          gridTemplateColumns: '.75fr 1fr',
        },
      },
      two: {
        '@md': {
          width: 600,
          gridTemplateColumns: 'repeat(2, 1fr)',
        },
      },
    },
  },
});

const ListItem = styled('li', {
  zIndex: 1,
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

const ItemHighlight = styled(motion.div, {
  zIndex: -1,
  position: 'absolute',
  inset: 0,
  borderRadius: 6,
  bgColor: '$slateA3',
});

type ContentListProps = {
  contentList: ContentListItem[];
};

export const ContentList: React.VFC<ContentListProps> = ({ contentList }) => {
  const [hovered, setHover] = React.useState(-1);

  return (
    <StyledContentList layout="two">
      {contentList.map(({ href, icon, title, text }, idx) => (
        <ListItem
          key={idx}
          onFocus={() => setHover(idx)}
          onMouseEnter={() => setHover(idx)}
        >
          <Link href={href}>
            <NavigationMenuContentLink>
              {icon && <LinkIcon>{icon}</LinkIcon>}
              <VStack gap="1">
                <LinkTitle>{title}</LinkTitle>
                <LinkText>{text}</LinkText>
              </VStack>
            </NavigationMenuContentLink>
          </Link>
          {hovered === idx ? (
            <ItemHighlight
              transition={{
                layout: {
                  duration: 0.2,
                  ease: 'easeOut',
                },
              }}
              layoutId="highlight"
            />
          ) : null}
        </ListItem>
      ))}
    </StyledContentList>
  );
};
