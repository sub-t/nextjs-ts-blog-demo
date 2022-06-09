import { styled } from 'stitches.config';
import { textStyles } from './styles';

export const Text = styled('p', textStyles);

export const Heading = styled('h1', textStyles, {
  fontWeight: 900,
});
