import { Portal } from '@radix-ui/react-portal';
import Link from 'next/link';
import { GiHamburgerMenu } from 'react-icons/gi';
import { SiHomeadvisor } from 'react-icons/si';
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from '@/components/common/Dialog';
import { Icon } from '@/components/common/Icon';
import { IconButton } from '@/components/common/IconButton';
import { Box } from '@/components/common/Layout';
import {
  NavigationBarLabel,
  NavigationBarLink,
} from '@/components/common/NavigationBar';
import { ScrollArea } from '@/components/common/ScrollArea';
import { categoryList } from '../config/categoryList';
import { tagList } from '../config/tagList';
import { ContentList } from './ContentList';

export const HamburgerMenu = () => (
  <Portal>
    <Box css={{ position: 'fixed', bottom: '$4', right: '$4' }}>
      <Dialog>
        <DialogTrigger asChild>
          <IconButton
            aria-label="hamburger menu"
            size="2"
            float
            icon={<GiHamburgerMenu />}
          />
        </DialogTrigger>
        <DialogContent css={{ pt: 40 }}>
          <ScrollArea css={{ height: '70vh' }}>
            <Box as="ul">
              <NavigationBarLabel>Home</NavigationBarLabel>
              <Box as="li">
                <Link href="/" passHref>
                  <NavigationBarLink>
                    <Icon size="3">
                      <SiHomeadvisor />
                    </Icon>
                    Home
                  </NavigationBarLink>
                </Link>
              </Box>
              <NavigationBarLabel>Category</NavigationBarLabel>
              <ContentList contentList={categoryList} />
              <NavigationBarLabel>Tag</NavigationBarLabel>
              <ContentList contentList={tagList} />
            </Box>
          </ScrollArea>
        </DialogContent>
      </Dialog>
    </Box>
  </Portal>
);
