import { ParsedUrlQuery } from 'querystring';
import type { NextPage, InferGetStaticPropsType, GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { HStack } from '@/components/common/Layout';
import { Tag } from '@/components/common/Tag';
import { Post } from '@/types';
import { formatDate } from '@/utils/format';
import { getPosts } from '@/utils/getPosts';

type Props = {
  posts: Post[];
};

type Params = ParsedUrlQuery;

const View: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  posts,
}) => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Home</h1>
      <HStack gap='2'>
        <Tag text="Next.js" href="/tag/Next.js" />
        <Tag text="React.js" href="/tag/React.js" />
      </HStack>
      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <Link href={`/${post.year}/${post.month}/${post.slug}`}>
              <a>{post.title}</a>
            </Link>
            <div>{formatDate(post.date)}</div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default View;

export const getStaticProps: GetStaticProps<Props, Params> = async () => {
  return {
    props: {
      posts: getPosts(),
    },
  };
};
