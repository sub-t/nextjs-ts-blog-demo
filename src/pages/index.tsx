import { ParsedUrlQuery } from 'querystring';
import type {
  InferGetStaticPropsType,
  GetStaticProps,
  NextPageWithLayout,
} from 'next';
import Head from 'next/head';
import { RiChatNewLine } from 'react-icons/ri';
import { Contents } from '@/components/app/Contents';
import { Header } from '@/components/app/Header';
import { Heading } from '@/components/app/Heading';
import { Posts } from '@/components/app/Posts';
import { Grid } from '@/components/common/Layout';
import { Hero } from '@/components/home/Hero';
import { APP_DESCRIPTION, APP_NAME, APP_URL } from '@/config/app';
import { getPosts } from '@/utils/getPosts';
import type { Post } from '@/types/Post';

type Props = {
  posts: Post[];
};

type Params = ParsedUrlQuery;

const View: NextPageWithLayout<
  InferGetStaticPropsType<typeof getStaticProps>
> = ({ posts }) => {
  return (
    <>
      <Head>
        <title>blog</title>
        <meta name="description" content={APP_DESCRIPTION} />
        <meta property="og:title" content={APP_NAME} />
        <meta property="og:description" content={APP_DESCRIPTION} />
        <meta property="og:url" content={APP_URL} />
      </Head>
      <Heading icon={<RiChatNewLine />} text="home">
        最新の記事
      </Heading>
      <Posts posts={posts} />
    </>
  );
};

View.getLayout = (page) => (
  <div className="global-layout">
    <Grid
      className="global-layout__header"
      css={{
        h: '100vh',
        gridTemplateRows: 'auto 1fr',
      }}
    >
      <Header />
      <Hero />
    </Grid>
    <Contents className="global-layout__contents">{page}</Contents>
  </div>
);

export default View;

export const getStaticProps: GetStaticProps<Props, Params> = async () => {
  return {
    props: {
      posts: getPosts(),
    },
  };
};
