import React from 'react';
import { Html, Head, Main, NextScript } from 'next/document';
import { getCssText } from 'stitches.config';

export default function Document() {
  return (
    <Html lang="ja">
      <Head>
        <style
          id="stitches"
          dangerouslySetInnerHTML={{ __html: getCssText() }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}