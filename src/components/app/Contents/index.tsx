import { HStack, VStack } from '@/components/common/Layout';

type Props = {
  children: React.ReactNode;
  className: string;
};

export const Contents: React.VFC<Props> = ({ children, className }) => {
  return (
    <HStack className={className} justify="center">
      <VStack
        gap="4"
        css={{
          boxSizing: 'border-box',
          w: '100%',
          maxW: 1264,
          px: 32,
        }}
      >
        {children}
      </VStack>
    </HStack>
  );
};
