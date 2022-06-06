import { FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa';
import { IconButton } from '@/components/common/IconButton';
import { Wrap } from '@/components/common/Layout';
import { OuterLink } from '@/components/common/Link';

export const IconGroup = () => (
  <Wrap gap="2">
    <OuterLink href="https://github.com/">
      <IconButton aria-label="github" icon={<FaGithub />} />
    </OuterLink>
    <OuterLink href="https://github.com/">
      <IconButton aria-label="twitter" icon={<FaTwitter />} />
    </OuterLink>
    <OuterLink href="https://github.com/">
      <IconButton aria-label="instagram" icon={<FaInstagram />} />
    </OuterLink>
  </Wrap>
);
