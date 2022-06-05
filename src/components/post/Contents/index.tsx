import { HStack } from '@/components/common/Layout';
import { styled } from 'stitches.config';

const Container = styled('div', {
  boxSizing: 'border-box',
  w: '100%',
  maxW: 784,
  mx: 32,
  mt: 48,
});

type Props = {
  children: React.ReactNode;
  className: string;
};

export const Contents: React.VFC<Props> = ({ children, className }) => {
  return (
    <HStack className={className} justify="center">
      <Container>{children}</Container>
    </HStack>
  );
};
