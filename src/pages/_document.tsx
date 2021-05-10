import * as React from 'react';
import Document, { Head, Html, Main, NextScript } from 'next/document';

class DailyNotesDocument extends Document {
  render(): React.ReactElement {
    return (
      <Html lang="en">
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            rel="preload"
            href="https://fonts.googleapis.com/css2?family=Charmonman:wght@400;700&display=swap"
            as="style"
          />
          <link href="https://fonts.googleapis.com/css2?family=Charmonman:wght@400;700&display=swap" rel="stylesheet" />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default DailyNotesDocument;
