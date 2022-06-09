import React from 'react';
import { InnerLink } from '@/components/common/Link';
import { Heading } from '@/components/common/Text';
import { useWindowSize } from '@/hooks/useWindowSize';
import { Box, VStack, HStack } from '../../common/Layout';
import { DarkThemeButton } from '../DarkThemeButton';
import { HamburgerMenu } from './HamburgerMenu';
import { IconGroup } from './IconGroup';
import { Menu } from './NavigationMenu';

type Props = {
  className?: string;
};

const HeaderWithNavigationMenu = () => (
  <VStack align="center" css={{ p: '48px 24px' }}>
    <Box css={{ w: '100%', maxW: 1200 }}>
      <HStack justify="between" align="center">
        <HStack justify="center" css={{ flex: 1 }}>
          <IconGroup />
        </HStack>
        <VStack gap="2">
          <Heading size="8">ブログのタイトル</Heading>
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
    <Heading size="7">
      <InnerLink href="/">ブログのタイトル</InnerLink>
    </Heading>
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
