import * as React from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';

import 'tailwindcss/tailwind.css';
import 'src/index.css';

function DailyNotesApp({ Component, pageProps }: AppProps): React.ReactElement<AppProps> {
  return (
    <>
      <Head>
        <title>My short notes</title>
        <meta charSet="UTF-8" />
        <meta name="description" content="My personal short notes" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default DailyNotesApp;
