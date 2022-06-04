import { ParsedUrlQuery } from 'querystring';
import type {
  NextPage,
  GetStaticProps,
  GetStaticPaths,
  InferGetStaticPropsType,
} from 'next';
import Head from 'next/head';
import { BiCategoryAlt } from 'react-icons/bi';
import { Heading } from '@/components/app/Heading';
import { Posts } from '@/components/app/Posts';
import { Tag } from '@/components/common/Tag';
import { TagGroup } from '@/components/tag/TagGroup';
import { APP_DESCRIPTION, APP_NAME, APP_URL } from '@/config';
import { Post } from '@/types';
import { getCategories } from '@/utils/getCategories';
import { getPostsByCategory } from '@/utils/getPosts';
import { getTags } from '@/utils/getTags';

type Props = {
  category: string;
  tags: string[];
  posts: Post[];
};

type Params = ParsedUrlQuery & {
  category: string;
};

const View: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  category,
  tags,
  posts,
}: Props) => {
  return (
    <>
      <Head>
        <meta name="description" content={APP_DESCRIPTION} />
        <meta property="og:title" content={APP_NAME} />
        <meta property="og:description" content={APP_DESCRIPTION} />
        <meta property="og:url" content={`${APP_URL}/category/${category}/`} />
      </Head>
      <Heading icon={<BiCategoryAlt />} text="category">
        {category}の記事
      </Heading>
      <TagGroup>
        {tags.map((tag) => (
          <Tag key={tag} href={`/tag/${tag}`} text={tag} />
        ))}
      </TagGroup>
      <Posts posts={posts} />
    </>
  );
};

export default View;

export const getStaticProps: GetStaticProps<Props, Params> = async ({
  params,
}) => {
  const { category } = params as Params;

  return {
    props: {
      category,
      tags: getTags(category),
      posts: getPostsByCategory(category),
    },
  };
};

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const paths = getCategories().map((category) => ({
    params: { category },
  }));

  return {
    paths,
    fallback: false,
  };
};
