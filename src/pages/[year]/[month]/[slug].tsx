import { ParsedUrlQuery } from 'querystring';
import {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
  NextPageWithLayout,
} from 'next';
import Head from 'next/head';
import { Header } from '@/components/app/Header';
import { Badge } from '@/components/common/Badge';
import { Date } from '@/components/common/Date';
import { HStack } from '@/components/common/Layout';
import { Contents } from '@/components/post/Contents';
import { Heading } from '@/components/post/Heading';
import { PostContent } from '@/components/post/PostContent';
import { APP_NAME, APP_URL } from '@/config';
import { formatDate } from '@/utils/format';
import { getPostByPath, getPosts } from '@/utils/getPosts';
import markdownToHtml from '@/utils/markdownToHtml';
import { description } from '@/utils/meta';
import type { Post } from '@/types';

type Props = {
  post: Post;
};

type Params = ParsedUrlQuery & {
  year: string;
  month: string;
  slug: string;
};

const View: NextPageWithLayout<
  InferGetStaticPropsType<typeof getStaticProps>
> = ({ post }) => {
  const {
    description,
    title,
    date,
    category,
    year,
    month,
    slug,
    content,
  } = post;

  return (
    <>
      <Head>
        <meta name="description" content={description} />
        <meta property="og:title" content={`${title} ･ ${APP_NAME}`} />
        <meta property="og:description" content={description} />
        <meta
          property="og:url"
          content={`${APP_URL}${year}/${month}/${slug}/`}
        />
      </Head>
      <article>
        <Heading>{title}</Heading>
        <HStack align="center" gap="3">
          <Date>{formatDate(date)}</Date>
          <Badge text={category} href={`/category/${category}`} />
        </HStack>
        <PostContent content={content} />
      </article>
    </>
  );
};

View.getLayout = (page) => (
  <div className="global-layout">
    <Header className="global-layout__header" />
    <Contents className="global-layout__contents">{page}</Contents>
  </div>
);

export default View;

export const getStaticProps: GetStaticProps<Props, Params> = async ({
  params,
}) => {
  const { year, month, slug } = params as Params;
  const path = `${year}/${month}/${slug}.md`;
  const post = getPostByPath(path);
  const content = await markdownToHtml(post.content || '');

  return {
    props: {
      post: {
        ...post.data,
        content,
        description: description(content),
      } as Post,
    },
  };
};

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const paths = getPosts().map(({ year, month, slug }) => ({
    params: {
      year,
      month,
      slug,
    },
  }));

  return {
    paths,
    fallback: false,
  };
};
