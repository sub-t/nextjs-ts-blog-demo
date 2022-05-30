import Link from 'next/link';
import { getPostByPath, getPosts } from '@/utils/getPosts';
import markdownToHtml from '@/utils/markdownToHtml';
import { description } from '@/utils/meta';
import type { Post } from '@/types';

type Props = {
  post: Post;
};

export default function View(props: Props) {
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
}

type Params = {
  params: {
    year: string;
    month: string;
    slug: string;
  };
};

export const getStaticProps = async ({
  params: { year, month, slug },
}: Params) => {
  const path = `${year}/${month}/${slug}.md`;
  const post = getPostByPath(path);
  const content = await markdownToHtml(post.content || '');

  return {
    props: {
      post: {
        ...post.data,
        content,
        description: description(content),
      },
    },
  };
};

export const getStaticPaths = () => {
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
