import { AiTwotoneTag } from 'react-icons/ai';
import { InnerLink } from '@/components/common/Link';
import {
  NavigationBarIcon,
  NavigationBarItem,
} from '@/components/common/NavigationBar';
import { ContentListItem } from '../types';

type ContentListProps = {
  contentList: ContentListItem[];
};

export const ContentList: React.VFC<ContentListProps> = ({ contentList }) => {
  return (
    <>
      {contentList.map(({ href, icon, title }) => (
        <InnerLink key={title} href={href}>
          <NavigationBarItem>
            <NavigationBarIcon icon={icon ?? <AiTwotoneTag />} />
            {title}
          </NavigationBarItem>
        </InnerLink>
      ))}
    </>
  );
};
