import React from 'react';
import { slate, indigo } from '@radix-ui/colors';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { NavigationMenuContentLink } from '@/components/common/NavigationMenu/NavigationMenuLink';
import { styled } from 'stitches.config';

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

const LinkBody = styled('div', {
  display: 'blog',
  textAlign: 'left',
});

const LinkTitle = styled('div', {
  fontWeight: 500,
  lineHeight: 1.2,
  marginBottom: 5,
  color: indigo.indigo12,
});

const LinkText = styled('p', {
  all: 'unset',
  color: slate.slate11,
  lineHeight: 1.4,
  fontWeight: 'initial',
});

const ItemHighlight = styled(motion.div, {
  zIndex: -1,
  position: 'absolute',
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  borderRadius: 6,
  bgColor: '$slateA3',
});

type ContentListItemType = {
  href: string;
  icon: React.ReactElement;
  title: string;
  text: string;
};

type ContentListProps = {
  contentList: ContentListItemType[];
};

export const ContentList: React.VFC<ContentListProps> = ({ contentList }) => {
  const [hovered, setHovered] = React.useState(-1);

  return (
    <StyledContentList layout="two">
      {contentList.map(({ href, icon, title, text }, idx) => (
        <ListItem
          key={idx}
          onFocus={() => setHovered(idx)}
          onMouseEnter={() => setHovered(idx)}
        >
          <Link href={href}>
            <NavigationMenuContentLink>
              {icon && <LinkIcon>{icon}</LinkIcon>}
              <LinkBody>
                <LinkTitle>{title}</LinkTitle>
                <LinkText>{text}</LinkText>
              </LinkBody>
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
