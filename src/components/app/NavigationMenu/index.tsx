import { HighlightItem, HighlightList } from '@/components/animate/Highlight';
import { ContentList } from '@/components/app/NavigationMenu/ContentList';
import {
  NavigationMenu,
  NavigationMenuLinkItem,
  NavigationMenuTriggerItem,
} from '@/components/common/NavigationMenu/index';
import { categoryList } from './config/categoryList';
import { tagList } from './config/tagList';

export const Menu = () => {
  return (
    <HighlightList id="NavigationMenu">
      <NavigationMenu>
        <HighlightItem id={0} css={{ borderRadius: 9999 }}>
          <NavigationMenuLinkItem href="/">
            ホーム
          </NavigationMenuLinkItem>
        </HighlightItem>
        <HighlightItem id={1} css={{ borderRadius: 9999 }}>
          <NavigationMenuTriggerItem title="カテゴリー">
            <ContentList contentList={categoryList} />
          </NavigationMenuTriggerItem>
        </HighlightItem>
        <HighlightItem id={2} css={{ borderRadius: 9999 }}>
          <NavigationMenuTriggerItem title="タグ">
            <ContentList contentList={tagList} />
          </NavigationMenuTriggerItem>
        </HighlightItem>
      </NavigationMenu>
    </HighlightList>
  );
};
