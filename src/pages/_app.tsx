import * as React from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';

import 'tailwindcss/tailwind.css';

function DailyNotesApp({ Component, pageProps }: AppProps): React.ReactElement<AppProps> {
  return (
    <>
      <Head>
        <title>My short notes</title>
        <meta charSet="UTF-8" />
        <meta name="description" content="My personal short notes" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default DailyNotesApp;
