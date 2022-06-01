import { Header, Layout } from '@/components/app';
import { globalCss } from 'stitches.config';
import type { AppProps } from 'next/app';

const globalStyles = globalCss({
  '*::selection': {
    background: '$violet5',
    color: '$violet12',
  },
  body: {
    margin: 0,
    padding: 0,
    fontFamily:
      'Yu Gothic, yugothic, ヒラギノ角ゴ ProN, Hiragino Kaku Gothic ProN, メイリオ, meiryo, sans-serif',
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  globalStyles();
  return (
    <>
      <Header />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
