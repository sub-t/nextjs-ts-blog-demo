import { indigo } from '@radix-ui/colors';
import { styled } from 'stitches.config';
import { Box, VStack, HStack } from '../../common/Layout';
import { Menu } from '../NavigationMenu';

const Title = styled('h1', {
  all: 'unset',
  userSelect: 'none',
  display: 'flex',
  justifyContent: 'center',
  mb: 12,
  fontSize: 48,
  fontWeight: 600,
  color: indigo.indigo12,
});

export const Header = () => {
  return (
    <VStack align="center" css={{ p: '48px 24px' }}>
      <Box css={{ boxSizing: 'border-box', w: '100%', maxW: 1264, px: 32 }}>
        <HStack justify="between">
          <Box></Box>
          <Box>
            <Title>ブログのタイトル</Title>
            <Menu />
          </Box>
          <Box></Box>
        </HStack>
      </Box>
    </VStack>
  );
};