import * as React from 'react';
import { AppProps } from 'next/app';

import 'tailwindcss/tailwind.css';

function DailyNotesApp({ Component, pageProps }: AppProps): React.ReactElement<AppProps> {
  return <Component {...pageProps} />;
}

export default DailyNotesApp;
