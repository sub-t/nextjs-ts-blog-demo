import { ParsedUrlQuery } from 'querystring';
import {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
  NextPageWithLayout,
} from 'next';
import Link from 'next/link';
import { Header } from '@/components/app/Header';
import { Layout } from '@/components/article/Layout';
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
> = (props: Props) => {
  return (
    <>
      <article>
        <h1>{props.post.title}</h1>
        <time>{props.post.date}</time>
        <div dangerouslySetInnerHTML={{ __html: props.post.content }} />
        <p className="mt-16 text-center">
          <Link href="/">
            <a>home</a>
          </Link>
        </p>
      </article>
    </>
  );
};

View.getLayout = (page) => (
  <>
    <Header />
    <Layout>{page}</Layout>
  </>
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
