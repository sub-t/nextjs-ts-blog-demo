import { FaHashtag, FaReact } from 'react-icons/fa';
import { SiNextdotjs } from 'react-icons/si';
import { ContentList } from '@/components/app/NavigationMenu/ContentList';
import { ContentListItem } from '@/components/app/NavigationMenu/types';
import {
  NavigationMenu,
  NavigationMenuLinkItem,
  NavigationMenuTriggerItem,
} from '@/components/common/NavigationMenu/index';

const contentList: ContentListItem[] = [
  {
    href: '/category/React.js',
    icon: <FaReact />,
    title: 'React.js',
    text: 'JavaScript library for GUI',
  },
  {
    href: '/category/Next.js',
    icon: <SiNextdotjs />,
    title: 'Next.js',
    text: 'JavaScript library for GUI',
  },
  {
    href: 'https://stitch.dev/',
    icon: <FaHashtag />,
    title: 'React',
    text: 'JavaScript library for GUI',
  },
  {
    href: 'https://stitches.dev/',
    icon: <FaReact />,
    title: 'React',
    text: 'JavaScript library for GUI',
  },
];

export const Menu = () => {
  return (
    <NavigationMenu>
      <NavigationMenuLinkItem href="/" internal>
        ホーム
      </NavigationMenuLinkItem>
      <NavigationMenuTriggerItem title="カテゴリー">
        <ContentList contentList={contentList} />
      </NavigationMenuTriggerItem>{' '}
      <NavigationMenuTriggerItem title="タグ">
        <ContentList contentList={contentList} />
      </NavigationMenuTriggerItem>
      <NavigationMenuLinkItem href="/" internal>
        スニペット
      </NavigationMenuLinkItem>
    </NavigationMenu>
  );
};
