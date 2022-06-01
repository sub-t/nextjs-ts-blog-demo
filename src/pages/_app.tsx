import { Header } from '@/components/app/Header';
import { Layout } from '@/components/app/Layout';
import { globalCss } from 'stitches.config';
import type { AppPropsWithLayout } from 'next/app';

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

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  globalStyles();

  const getLayout =
    Component.getLayout ??
    ((page) => (
      <>
        <Header />
        <Layout>{page}</Layout>
      </>
    ));

  return getLayout(<Component {...pageProps} />);
}

export default MyApp;
