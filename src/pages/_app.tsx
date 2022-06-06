import { Contents } from '@/components/app/Contents';
import { Header } from '@/components/app/Header';
import { Provider } from '@/provider';
import { globalCss } from 'stitches.config';
import type { AppPropsWithLayout } from 'next/app';
import '@/styles/app.css';

const globalStyles = globalCss({
  '*::selection': {
    background: '$violet5',
    color: '$violet12',
  },
  body: {
    bgColor: '$loContrast',
    margin: 0,
    padding: 0,
    fontFamily:
      'Yu Gothic, yugothic, ヒラギノ角ゴ ProN, Hiragino Kaku Gothic ProN, メイリオ, meiryo, sans-serif',
  },
});

type Props = {
  page: React.ReactElement<any, string | React.JSXElementConstructor<any>>;
};

const DefaultLayout = ({ page }: Props) => (
  <div className="global-layout">
    <Header className="global-layout__header" />
    <Contents className="global-layout__contents">{page}</Contents>
  </div>
);

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  globalStyles();

  const getLayout =
    Component.getLayout ?? ((page) => <DefaultLayout page={page} />);

  return <Provider>{getLayout(<Component {...pageProps} />)}</Provider>;
}

export default MyApp;
