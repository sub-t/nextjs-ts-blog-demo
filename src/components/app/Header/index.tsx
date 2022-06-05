import React from 'react';
import { styled } from 'stitches.config';
import { Box, VStack, HStack } from '../../common/Layout';
import { Menu } from '../NavigationMenu';

const Title = styled('h1', {
  all: 'unset',
  userSelect: 'none',
  display: 'flex',
  justifyContent: 'center',
  mb: 12,
  fontSize: 40,
  fontWeight: 600,
  color: '$hiContrast',
});

type Props = {
  className?: string;
};

export const Header: React.VFC<Props> = ({ className }) => {
  return (
    <VStack className={className} align="center" css={{ p: '48px 24px' }}>
      <Box css={{ boxSizing: 'border-box', w: '100%', maxW: 1200 }}>
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
