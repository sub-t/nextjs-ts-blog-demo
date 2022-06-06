import { ContentList } from '@/components/app/Header/NavigationMenu/ContentList';
import {
  NavigationMenu,
  NavigationMenuLinkItem,
  NavigationMenuTriggerItem,
} from '@/components/common/NavigationMenu/index';
import { categoryList } from '../config/categoryList';
import { tagList } from '../config/tagList';

export const Menu = () => {
  return (
    <NavigationMenu>
      <NavigationMenuLinkItem href="/" inner>
        Home
      </NavigationMenuLinkItem>
      <NavigationMenuTriggerItem title="Category">
        <ContentList contentList={categoryList} />
      </NavigationMenuTriggerItem>
      <NavigationMenuTriggerItem title="Tag">
        <ContentList contentList={tagList} />
      </NavigationMenuTriggerItem>
    </NavigationMenu>
  );
};
