import { Contents } from '@/components/app/Contents';
import { Header } from '@/components/app/Header';
import { Provider } from '@/providers/app';
import type { AppPropsWithLayout } from 'next/app';
import '@/styles/app.css';

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
  const getLayout =
    Component.getLayout ?? ((page) => <DefaultLayout page={page} />);

  return <Provider>{getLayout(<Component {...pageProps} />)}</Provider>;
}

export default MyApp;
