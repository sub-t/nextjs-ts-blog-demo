import { Portal } from '@radix-ui/react-portal';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IconButton } from '@/components/common/IconButton';
import { Box } from '@/components/common/Layout';
import { NavigationBarLabel } from '@/components/common/NavigationBar';
import { Sheet, SheetContent, SheetTrigger } from '@/components/common/Sheet';
import { categoryList } from '../config/categoryList';
import { tagList } from '../config/tagList';
import { ContentList } from './ContentList';

export const HamburgerMenu = () => (
  <Portal>
    <Box css={{ position: 'fixed', bottom: '$4', right: '$4' }}>
      <Sheet>
        <SheetTrigger asChild>
          <IconButton
            type="button"
            aria-label="hamburger menu"
            size="2"
            float
            icon={<GiHamburgerMenu />}
          />
        </SheetTrigger>
        <SheetContent side="left">
          <NavigationBarLabel>ホーム</NavigationBarLabel>
          <NavigationBarLabel>カテゴリー</NavigationBarLabel>
          <ContentList contentList={categoryList} />
          <NavigationBarLabel>タグ</NavigationBarLabel>
          <ContentList contentList={tagList} />
        </SheetContent>
      </Sheet>
    </Box>
  </Portal>
);
