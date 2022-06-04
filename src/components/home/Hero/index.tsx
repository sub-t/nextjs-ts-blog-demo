import { VStack } from '@/components/common/Layout';
import { styled } from 'stitches.config';

const ImageWrapper = styled('figure', {
  flex: 1,
  overflow: 'hidden',
});

const Image = styled('img', {
  w: '100%',
  h: '100%',
  objectFit: 'contain',
});

export const Hero = () => {
  return (
    <VStack align="center" css={{ zIndex: -1, position: 'absolute', inset: 0, bgColor: '$slate3' }}>
      <ImageWrapper>
        <Image
          src="/assets/Under Constructions_Flatline.png"
          alt="under construction"
        />
      </ImageWrapper>
    </VStack>
  );
};
