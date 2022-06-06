import { Portal } from '@radix-ui/react-portal';
import Link from 'next/link';
import { GiHamburgerMenu } from 'react-icons/gi';
import { SiHomeadvisor } from 'react-icons/si';
import { IconButton } from '@/components/common/IconButton';
import { Box } from '@/components/common/Layout';
import {
  NavigationBarLabel,
  NavigationBarLink,
} from '@/components/common/NavigationBar';
import { Sheet, SheetContent, SheetTrigger } from '@/components/common/Sheet';
import { categoryList } from '../config/categoryList';
import { tagList } from '../config/tagList';
import { LinkIcon, ListItem } from '../ListLink';
import { ContentList } from './ContentList';

export const HamburgerMenu = () => (
  <Portal>
    <Box css={{ position: 'fixed', bottom: '$4', right: '$4' }}>
      <Sheet>
        <SheetTrigger asChild>
          <IconButton
            aria-label="hamburger menu"
            size="2"
            float
            icon={<GiHamburgerMenu />}
          />
        </SheetTrigger>
        <SheetContent side="left">
          <NavigationBarLabel>Home</NavigationBarLabel>
          <ListItem>
            <Link href="/" passHref>
              <NavigationBarLink>
                <LinkIcon hamburger>
                  <SiHomeadvisor />
                </LinkIcon>
                Home
              </NavigationBarLink>
            </Link>
          </ListItem>
          <NavigationBarLabel>Category</NavigationBarLabel>
          <ContentList contentList={categoryList} />
          <NavigationBarLabel>Tag</NavigationBarLabel>
          <ContentList contentList={tagList} />
        </SheetContent>
      </Sheet>
    </Box>
  </Portal>
);
