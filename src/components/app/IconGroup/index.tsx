import { FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa';
import { IconButton } from '@/components/common/IconButton';
import { Wrap } from '@/components/common/Layout';

export const IconGroup = () => (
  <Wrap gap="2">
    <IconButton icon={<FaGithub />} />
    <IconButton icon={<FaTwitter />} />
    <IconButton icon={<FaInstagram />} />
  </Wrap>
);
