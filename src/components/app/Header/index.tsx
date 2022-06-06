import React from 'react';
import { useWindowSize } from '@/hooks/useWindowSize';
import { styled } from 'stitches.config';
import { Box, VStack, HStack } from '../../common/Layout';
import { DarkThemeButton } from '../DarkThemeButton';
import { IconGroup } from '../IconGroup';
import { HamburgerMenu } from './HamburgerMenu';
import { Menu } from './NavigationMenu';

const Title = styled('h1', {
  all: 'unset',
  userSelect: 'none',
  display: 'flex',
  justifyContent: 'center',
  fontSize: 40,
  fontWeight: 600,
  color: '$hiContrast',

  variants: {
    hamburger: {
      true: {
        fontSize: 32,
      },
    },
  },
});

type Props = {
  className?: string;
};

const HeaderWithNavigationMenu = () => (
  <VStack align="center" css={{ p: '48px 24px' }}>
    <Box css={{ boxSizing: 'border-box', w: '100%', maxW: 1200 }}>
      <HStack justify="between" align="center">
        <HStack justify="center" css={{ flex: 1 }}>
          <IconGroup />
        </HStack>
        <VStack gap="2">
          <Title>ブログのタイトル</Title>
          <Menu />
        </VStack>
        <HStack justify="center" css={{ flex: 1 }}>
          <DarkThemeButton />
        </HStack>
      </HStack>
    </Box>
  </VStack>
);

const HeaderWithHamburgerMenu = () => (
  <HStack justify="between" align="center" css={{ p: 24 }}>
    <Title hamburger>ブログのタイトル</Title>
    <DarkThemeButton />
    <HamburgerMenu />
  </HStack>
);

export const Header: React.VFC<Props> = ({ className }) => {
  const { width } = useWindowSize();

  return (
    <div className={className}>
      {width >= 768 ? (
        <HeaderWithNavigationMenu />
      ) : (
        <HeaderWithHamburgerMenu />
      )}
    </div>
  );
};
