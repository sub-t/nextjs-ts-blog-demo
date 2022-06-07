import { FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa';
import { Icon } from '@/components/common/Icon';
import { Wrap } from '@/components/common/Layout';
import { OuterLink } from '@/components/common/Link';

export const IconGroup = () => (
  <Wrap gap="5">
    <OuterLink href="https://github.com/">
      <Icon size="2">
        <FaGithub />
      </Icon>
    </OuterLink>
    <OuterLink href="https://github.com/">
      <Icon size="2">
        <FaTwitter />
      </Icon>
    </OuterLink>
    <OuterLink href="https://github.com/">
      <Icon size="2">
        <FaInstagram />
      </Icon>
    </OuterLink>
  </Wrap>
);
