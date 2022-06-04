import { VStack, Box } from '@/components/common/Layout';
import { styled } from 'stitches.config';
import App from './View';

const Heading = styled('h2', {
  all: 'unset',
  display: 'block',
  fontWeight: 900,
  fontSize: 56,
  lineHeight: 1.2,
  color: '$hiContrast',
  textTransform: 'uppercase',
});

export const Hero = () => {
  return (
    <VStack align="center" css={{ overflow: 'hidden' }}>
      <Box css={{ position: 'relative', flex: 1, width: '100vw' }}>
        <App />
        <Box
          css={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate3d(-50%, -50%, 0)',
          }}
        >
          <Heading>
            under
            <br />
            construction
          </Heading>
        </Box>
      </Box>
    </VStack>
  );
};
