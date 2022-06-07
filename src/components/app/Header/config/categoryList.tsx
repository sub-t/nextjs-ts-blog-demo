import { FaJava, FaReact, FaUnity } from 'react-icons/fa';
import { SiNextdotjs } from 'react-icons/si';
import { ContentListItemType } from '@/components/app/Header/types';

export const categoryList: ContentListItemType[] = [
  {
    href: '/category/React.js',
    icon: <FaReact />,
    title: 'React.js',
    text: 'JavaScript library',
  },
  {
    href: '/category/Next.js',
    icon: <SiNextdotjs />,
    title: 'Next.js',
    text: 'JavaScript library',
  },
  {
    href: '/category/Unity',
    icon: <FaUnity />,
    title: 'Unity',
    text: 'JavaScript library',
  },
  {
    href: '/category/Java',
    icon: <FaJava />,
    title: 'Java',
    text: 'JavaScript library',
  },
];
