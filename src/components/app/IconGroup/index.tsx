import { FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa';
import { IconButton } from '@/components/common/IconButton';
import { Wrap } from '@/components/common/Layout';

export const IconGroup = () => (
  <Wrap gap="2">
    <IconButton type="button" aria-label="github" icon={<FaGithub />} />
    <IconButton type="button" aria-label="twitter" icon={<FaTwitter />} />
    <IconButton type="button" aria-label="instagram" icon={<FaInstagram />} />
  </Wrap>
);
