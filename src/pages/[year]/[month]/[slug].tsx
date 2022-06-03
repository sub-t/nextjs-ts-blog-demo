import { ParsedUrlQuery } from 'querystring';
import {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
  NextPageWithLayout,
} from 'next';
import { Header } from '@/components/app/Header';
import { Date } from '@/components/common/Date';
import { Contents } from '@/components/post/Contents';
import { Heading } from '@/components/post/Heading';
import { PostContent } from '@/components/post/PostContent';
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
        <Heading>{props.post.title}</Heading>
        <Date>{props.post.date}</Date>
        <PostContent content={props.post.content} />
      </article>
    </>
  );
};

View.getLayout = (page) => (
  <>
    <Header className='global-layout__header' />
    <Contents className='global-layout__contents'>{page}</Contents>
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
