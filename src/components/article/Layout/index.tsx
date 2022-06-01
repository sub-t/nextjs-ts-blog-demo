import { HStack } from '@/components/common/Layout';
import { styled } from 'stitches.config';

const Container = styled('div', {
  boxSizing: 'border-box',
  w: '100%',
  maxW: 784,
  px: 32,
});

type LayoutProps = {
  children: React.ReactNode;
};

export const Layout: React.VFC<LayoutProps> = ({ children }) => {
  return (
    <HStack justify="center" css={{ bgColor: '$mauve3' }}>
      <Container>
        {children}
      </Container>
    </HStack>
  );
};
